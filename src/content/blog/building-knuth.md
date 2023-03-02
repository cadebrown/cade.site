---
title: "Building Knuth, My Computer"
description: "Analysis of the parts I chose, and how I built it."
author: "Cade Brown"
date: "2023-02-28:00:00:00"
keywords: "hardware"
image: "/images/knuth.webp"
---

# Specifications

It's been ~4 years since I've built a computer, and the new generation of CPUs and GPUs had me missing out on the fun. So, I decided to build a new computer, and document the process. I ended up going with the following parts (check out the [full list](https://pcpartpicker.com/user/CadeBrown/saved/9WGLyc), too):

  * [AMD Ryzen 9 7950x](https://cpu.userbenchmark.com/AMD-Ryzen-9-7950X/Rating/4133)
    * [G.Skill Trident Z5 Neo 64GB](https://www.overclockers.com/g-skill-trident-z5-neo-rgb-64gb-ddr5-6000-cl30-memory-kit-review/)
    * [ARCTIC Liquid Freezer II 280](https://www.tweaktown.com/reviews/9412/arctic-liquid-freezer-ii-280-cpu-cooler/index.html)
  * [MSI RTX 4090 Gaming X Trio](https://www.techpowerup.com/review/msi-geforce-rtx-4090-gaming-x-trio/)
  * [Gigabyte B650 Aorus Elite AX](https://latestintech.com/b650-aorus-elite-ax-motherboard-review/)
  * [HYTE Y40](https://hyte.com/store/y40?v=135)

I wanted a machine that I could use for machine learning, as well as normal programming, and gaming for recreation. Also, I had some money still burning a hole in my pocket from my NVIDIA internship, so I decided to splurge a bit. The 4090 is a beast for both ML and gaming, and the 7950x is a beast for production. 

![All the boxes for Knuth](/images/knuth-boxes.webp)

# Building

Building this PC was extraordinarily easy, I was a big fan of the Y40 case -- it looks beautiful and fits the 4090 perfectly with the included vertical GPU mount. This is almost essential for newer generation cards, as motherboards can't really support the weight of the card. And, the fan on the bottom of the case helps cool the GPUs heat sink fins, which are oriented vertically when the card is rotated.



# FAQ

## "Why not the 7950x3D?"

Some may be wondering why I didn't go "all out" and buy the new [7950x3D](https://www.youtube.com/watch?v=9gCzXdLmjPY) that just came out. The 7950x3D is interesting because it uses [3D V-Cache](https://www.amd.com/en/technologies/3d-v-cache), a feature that accelerates some games that are heavily dependent on cache. While I was excited for it, there were a number of reasons it doesn't make sense for me, or for most people:

  * It only helps some specific workloads that could use an extra 64mb of cache
  * It slows down core frequency, and increases thermal load
  * Only one CCD (chiplet) has the V-Cache, so process scheduling is more error-prone
  * It's more expensive than the 7950x
  * In some cases, it has worse performance than the 7800x3D that's about to come out

So, for all these reasons, I decided to stick with the 7950x, which maintains extremely fast core frequency and still has a sizable cache. If I was only using this machine to play games, I'd wait for the 7800x3D, which has 8c/16t and the same amount of 3D V-Cache, but since it isn't split between 2 CCDs, all cores will have access to the extra V-Cache. This is important, for example, when scheduling processes to physical threads; if a process is migrated to the other chiplet it will suddenly have drastically different performance characteristics. Some workloads will prefer higher core frequency, while others will prefer more cache, and miscalculating will give inconsistent performance. Supposedly, there are [thread scheduling drivers](https://www.tomshardware.com/reviews/amd-ryzen-9-7950x3d-cpu-review/2), but I'm not sure how well they work.f

If you're interested, you can read more about it:

  * [7950X3D and 7900X3D Hybrid Architecture Clocks and Scheduling Ramifications](https://www.reddit.com/r/Amd/comments/10451xc/7950x3d_and_7900x3d_hybrid_architecture_clocks/)


