---
title: Import NL2 Spline to Blender
postDate: 2024-11-10
image: ""
description: Description of the article would go into this section right here. This could be between one to two sentences.
contentType: article
tags:
    - Coaster
    - Guide
    - Blender
    - NoLimits 2
---
Congrats! You've finished your NoLimits coaster layout! 🎉  Now it's time to turn it into a 3D model for printing, for importing to Planet Coaster, or just because you can. This guide will help you begin the next stage of your project: by exporting both the spline and supports into Blender, and then eventually you'll get a model to export to all that fun stuff mentioned earlier.
## Downloads & Setup

To pull this off, you'll need four things:
1. [Blender](http://blender.org)
2. [Track Spline Importer Add-on]()
3. [Support Importer Add-on]()
4. [NoLimits 2: Professional Edition]()

(I'm looking for ways to do this with the standard version of NoLimits 2, but for now you'll need to have the Professional version for this method to work.)

For Blender, I typically use the most recent version so that my tools like Track and Support generators are always up to date. This guide will be using version 4.2, but if anything becomes depreciated, please reach out to me and I'll make updates.

If you would like to set up your files ahead of time, I suggest having an `exports` folder inside of your NoLimits project and also using an `add-ons`  folder for Blender. For now, go ahead a take your zip files you just downloaded and drop them in that `add-ons` folder. I'll show you how to install them when we open Blender later.

To install the Track and Support Blender add-ons, open your Blender preferences with `Ctrl/CMD ,` or go under the `Edit` menu then `Preferences`. In here, you'll find the `Add-ons` menu. For version 4.2 and up at, you'll have to hit the drop-down menu and choose `Install from disk`. And now, find that `add-ons` folder and select the .zip files to install them. Do this for both add-ons, and you're done with this part.


But for now, onto the NoLimits editor... Professional Edition.

## NoLimits 2 Editor
Once you're in your NoLimits project, navigate to the `Coaster` tab. In there, you're going to find the current "coaster" you're working on. 

*Pay attention to this part!* If you organize your projects like me, you'll have a whole list of options here. The more options you have, the more exports and imports you'll need to do, remember that. Oh! And now is a good time to have a good naming convention for your options here; labeling the splines and supports once just makes it easier to maintain later.

When your coaster/supports are selected, go to the `Professional` tab. In here, you'll have your export options. Let's start with `Export Track Spline`.

### Exporting Track Spline

With splines, you'll have a few options. The distance between points is the amount of detail in your spline. So, the lower the number, the more detailed spline you get, but too much detail is going to slow down your computer... by a lot! For this, 0.5m is perfectly fine and the option I use the most. The second option here is the spline type. *You should always chose center of rails!* This makes it so that when you make your coaster tracks, they'll always be aligned in the correct orientation.

### Exporting Supports

Supports are way easier. Don't forget, you'll have to go back to the `Coaster` tab and choose the supports "coaster" if you have them separated like I do here. Head back to the `Professional` tab, click `Export Supports XML` and save. That's it!

Ok, Blender time!

## Blender

Once everything is installed from the initial setup, you wont have to worry about that part ever again which is great! From this point on, whenever you open Blender, all you'll need to do is click `File` > `Import`, then choose to import each spline or support file from the `Exports` folder from your NoLimits project *individually*. 

Yes, each file must *individually* be imported into Blender. So, on my end I'll have to import my track spline and all 5 part of my support files separately. Having the files separated makes working in chunks much easier both in the NoLimits Editor and in Blender, especially with projects as complicated as this one.

After importing the track spline and support files into Blender, notice the track spline's z-rotation and support z-rotations don't align. The best way of resolving this is to rotate the track spline on the Z axis by 180 deg. It's more efficient than rotating all of the support objects.  Also *don't forget to apply your rotation in object mode* (or rotate using edit mode)!
### Track  Spline Editing

To quickly show you what's happening here, I'll add a mesh to follow the curve of your spline. You'll notice that on inversions, the curve kind of... goes wild out on 90 and 180 degree points. Don't worry, we'll fix this in a sec. But let me back up a sec and show you how I got there. It'll come in handy later when adding your track type.

If you don't have any track modeled yet, use the default cube and duplicate across your spline. Shape it however you want. Make sure the top of your cube is at Z position 0 and the length of the track runs on the X axis. It's also a good idea to have it centered on the Y axis. Let's also merge these bottom edges here to make it more "track" shaped. *(time lapse)*

Congrats! You made your first track design! *(cheers)*

Now, we'll add two modifiers to have the track match the spline shape: the array modifier and the curve modifier, and in that exact order! Otherwise you'll end up with something like this. *(show example)*

In the Array modifier, set the array count to "Curve" and select your spline. And in the Curve modifier, also set the curve to the same spline. 

Something you'll notice here: your spline points are all rotated by 90 deg across the whole curve. To fix this, select the spline curve and go to edit mode. Select your entire spline and in the transform menu you're going to subtract "90d" to the number that's already there. *(show hot keys visually)* Here, just add "d" as our unit to avoid that annoying error that pops up.

*Now* let's fix those inversions.

Select the spline curve and head to the curve's Data properties. In the "Shape" panel, drop the Resolution Preview U to 1. Next, open the "Active Spline" panel and drop the Order U down to 2. This generally smoothes out the spline by using only our data points to shape the coaster's spline.

You might still have some blemishes in your spline. If so, you might have to "manually" tilt the spline. Not each point individually, but as a selection. What you'll do is make sure the tilt is flowing continuously through the entire curve.

Here, the points jump from ___ to ___ . Select the point of the curve with a tilt value that drastically changes. Now, `Ctrl + click` the end point of the curve and depending on the tilt of the previous point, you're either going to add or subtract "360d" to continue the roll. Repeat this for any blemished inversions at perfect 90 and 180 deg angles.

The alternatives are to go back in the NoLimits export settings and play around with the "Distance Between Points" value. For me this is too much guess work, so I stick to the manual tilt adjustments. Or you could make sure that your inversions are not at perfect 90 and 180 deg angles like the Cobra Roll and Sidewinder here.

But some elements like loops and corkscrews cant avoid the manual tilt adjustment

## Outro
And that's it! From here, you can add any kind of track with the array and curve modifiers we used before, and converting the supports into curves and adjusting the bevel options. The sky's the limit at this point.

I'll be going in depth on how to make different track types soon, so be on the look out for that. I'm also looking to make more tools for this process to make it easier for other people to coaster model with me. Because, why not?

That's all. Bye! 