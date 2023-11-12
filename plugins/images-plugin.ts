//import path from 'node:path';
//import { camelCase } from 'change-case';

export interface PluginOption {
	name: string;
	enforce?: 'pre' | 'post';
	transform(code: string, id: string): TransformResult | undefined;
}

export interface TransformResult {
	code: string;
}

// regex for the custom components hook
const REGEX_HOOK = /Object\.assign\(\{((\s|\n)*\w*\:\s*(\w|\s|\"|\')*,?(\s|\n)*)*\}, props\.components\)\;/g;
/*example:
import { Fragment as _Fragment } from "astro/jsx-runtime";
import { jsxs as _jsxs } from "astro/jsx-runtime";
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    img: "img"
  }, props.components);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p
*/

export function imagesPlugin(): PluginOption {
	return {
		name: 'images-plugin',
		enforce: 'pre',
		transform(code: string, id: string): TransformResult | undefined {
			//if (id.endsWith('md') || id.endsWith('mdx')) {
			if (id.endsWith('mdx')) {
					// find raw components hook
				const hooks = code.match(REGEX_HOOK);

				if (hooks?.length != 1) {
					//console.log("CODE:", code)
					//console.log("HOOKS:", hooks)
					console.error("Could not find hook for components, to install custom image one (in " + id + ")")
					// throw error
					return undefined
				}
				//console.log("ID", id)
				
				// calculate the import depth required
				const importDepth = id.split("src/")[1].split("/").length - 1

				const imports = {
					'MyFigure': `import MyFigure from '${"../".repeat(importDepth)}components/MyFigure.astro';\n`
				}

				// split on hook
				const hook = hooks[0]
				const [before, after] = code.split(hook);
				const finalHook = hook.replace(/img\:(\"|\'|\w| )*/g, "img:MyFigure")

				// append import definitions needed
				let defs = ""
				for (const [key, value] of Object.entries(imports)) {
					if (code.indexOf('import ' + key) < 0) {
						defs += value
					}
				}

				// now, recombine with the new hook
				const finalCode = defs + before + finalHook + after

				//console.log(finalCode)
				return {
					code: finalCode,
				};
			}
		},
	};
}