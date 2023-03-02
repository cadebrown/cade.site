---
title: "How To Render Fractal Geometry"
description: "A personal obsession of mine, explained in depth."
author: "Cade Brown"
date: "2021-04-01:00:00:00"
keywords: "math, hardware"
image: "/images/mandelbrot-0.webp"
---

[Fractals](https://en.wikipedia.org/wiki/Fractal) have interested me since I was very young. I've always been fascinated by the idea of self-similarity, and the fact that you can zoom in infinitely on a fractal and still see the same pattern. They seem like a glitch in the universe -- given a small and finite set of rules, you can generate seemingly infinite complexity. How does $ z \to z^2 + c $ 

$$ z = z^2 + c $$


I published my first paper **Design, Optimization, and Benchmarking of Dense Linear Algebra Algorithms on AMD GPUs**, which was published in [IEEE HPEC 2020](https://ieee-hpec.org/). This was a major project of mine at [ICL](https://icl.utk.edu) that aimed to take the existing [MAGMA](https://icl.utk.edu/magma/index.html) library that ran on NVIDIA GPUs, and port it to AMD GPUs. Specifically, it needed to work on the [Frontier supercomputer at ORNL](https://en.wikipedia.org/wiki/Frontier_(supercomputer)), which has AMD GPUs.

Interestingly, my [co-author won the Turing award](https://en.wikipedia.org/wiki/Jack_Dongarra). He is a legend in the HPC community, and I was very honored to work with him.

**TL;DR: we were able to get 73% faster time-to-solution for solvers, and up to 60x faster for BLAS operations.**

We tuned various algorithms (matrix multiplication, rank-k updates) that are common building blocks of machine learning, physical simulations, and other applications. There were a number of obstacles to extracting good performance out of the new hardware; specifically the change in warp size (32 -> 64), new compiler (NVIDIA's nvcc -> AMD's ROCm/hipcc), and overall higher peak performance of newer hardware. So much of the HPC ecosystem was built around CUDA, and luckily AMD's HIP was very similar conceptually.



You can access it at these places:

  * [at ICL's PDF](https://www.icl.utk.edu/files/publications/2020/icl-utk-1405-2020.pdf)
  * [at Semantic Scholar](https://www.semanticscholar.org/paper/Design%2C-Optimization%2C-and-Benchmarking-of-Dense-on-Brown-Abdelfattah/d233df73ce91141aad90c956b4c3ddf6cd2b3847)
  * [at HGPU](https://hgpu.org/?p=22887)
  * [at OS hack{a}thon's resources](https://www.oshackathon.org/resources#h.2swl4wedmt8y)

<iframe src="https://www.icl.utk.edu/files/publications/2020/icl-utk-1405-2020.pdf" style="width:100%; height:900px;" frameborder="0"></iframe>