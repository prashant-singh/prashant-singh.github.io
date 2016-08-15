---
layout: post
title: Random prize selection based on frequencies in Unity3D C#
summary: Create as many prizes and you can control which prize to be selected more randomly.
tags: [Unity, Random, Programming]
categories: [Unity, Programming]
---

This post will just let you know how you can create a controlled random selection script that you can use in some gambling games like spinning wheel.

Initialize the variables 
In my case I am creating 4 variables for 4 prizes.
We will add it the range attribute so we get that sexy slider option in the inspector.

<hr>

<pre class="brush: csharp; title: ; notranslate" title="">
 [Range(0,10)]
    public int prize1,prize2,prize3,prize4;
</pre>

<hr>

Then I am creating a temporary list of int to do something I will tell you in the next steps.

<hr>

<pre class="brush: csharp; title: ; notranslate" title="">
    List&lt;int&gt; prizeList = new List&lt;int&gt;();
</pre>

<hr>


This is the main part of the magic to happen.
Remember when I said that I will tell you about the temporary list in the next steps,
Well this is that step.
I will fill the list based on the frequencies set in the inspector which I will do it later after completing this script.
Now, for example if I have set the frequency of the second prize to be highest like 8 out of 10 so the prize number 2 will be added 8 times in the temporary list and vice-versa.
And don't forget to call this function in the Start().

<hr>

<pre class="brush: csharp; title: ; notranslate" title="">
void Init()
    {
        prizeList.Clear ();
        //Add every prizes in the list
        AddItemsInList (prize1,1);
        AddItemsInList (prize2,2);
        AddItemsInList (prize3,3);
        AddItemsInList (prize4,4);
    }
</pre>

<hr>

This adds the given prize number in the list itemTotal times which is our frequency for the given prize set in the inspector.
This means the more the frequency value the more the chance of the item to be selected from the list.

<hr>

<pre class="brush: csharp; title: ; notranslate" title="">
void AddItemsInList(int itemTotal,int prizeNum)
    {
        for (int count = 0; count < itemTotal; count++) 
        {
            prizeList.Add (prizeNum);
        }
    }
</pre>

<hr>

 Now when I have done everything I just need to select the random number from the list I have created above.

<hr>
 
<pre class="brush: csharp; title: ; notranslate" title="">
void SelectRandomPrize()
    {
        // Now we just have to select the prize number from the list which we have created.
        int selectedRandomPrizeNumber = prizeList [Random.Range (0, prizeList.Count)];
        Debug.Log ("Prize Number "+selectedRandomPrizeNumber);
    }
</pre>
<hr>


So this is it.



Here is the full code on github
[ControlledRandom.cs](https://github.com/prashant-singh/unity_general/blob/master/Scripts/ControlledRandom.cs)

Now time for some screenshots


![Screenshot 1](https://raw.githubusercontent.com/prashant-singh/prashant-singh.github.io/master/img/image00.png)


As you will see in the screenshot 1 that I have set the prize 2 frequency to 8,
And the lowest will be prize 4 which is 1.

Now in the second screenshot

![Screenshot 2](https://raw.githubusercontent.com/prashant-singh/prashant-singh.github.io/master/img/image01.png)
 
You can see the result that the most selected prize was the prize number 2 and the least was the prize 4 and other prizes as their frequencies.
 
 So this was not suppose to be a long tutorial of something so much important, but this can help some of you if you ever need to implement this.







