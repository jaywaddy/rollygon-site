---
title: How to Use Tools by Rollygon
postDate: 2025-08-04
image: 
description: 
contentType: 
tags:
  - Guide
---

In order to avoid having to copy an paste this entire article to each tool, I thought it would be more intuitive to link each tool to this article. 

Each tool will include a `.blend` file that contains a `plane` mesh, a `curve`, a `geometry node`, group, and example of the tool in action. However in order to use the tools, opening the files aren't necessary.

# Set-up

Start by creating a `"tools"` folder accessible to your current Blender project file. You can further organizes to your liking, but this folder will hold all of the track and support generating tools needed for your coasters. 

Move the all of the `.blend` downloads into this folder. 

# Blender Integration

Once in Blender, you'll need to `link` each tool as a `node group`. 

Go to `File` > `Link...` then navigate to the `tools` folder. From there, find the tool you need and select the `nodes` folder. Here, you'll select the `node group` with the same title as the tool and select `Enter`.

You can either repeat this step for each tool, or you create a `.blend` file that contains each necessary tool in one `.blend` file and only have to `Link` to one `.blend` file.

# Using the Tools

Now that the files are all linked up, you are now able to start using the tools! 

For each tool, you'll need existing geometry. I like to use default `planes` by hitting `shift + A` and selecting `Plane` (any primitive will work for track generating tools), or non-splitting `curves` for supports . Feel free to select whichever primitive you prefer.

Now that you have some geometry to work with, it's time to put the tool to work.

## Organization 

To keep you projects less chaotic, now is a great time to choose a name for your each track piece or support. Use `Collections` too keep all of your objects organized.

It is also a good idea to have a naming convention for your pieces: I use `TRK_001` and `SUP_001`.