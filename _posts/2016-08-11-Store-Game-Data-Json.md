---
layout: post
title: Storing/Loading Game Data in json file Unity3D C#
---


This post will cover how you can store your game's tons of data in a json file and obviously load also.

This is not a replacement for PlayerPrefs or Serialization and Deserialization, This is just another method which can be used to save lots of data in a json file that data can be anything, your game's settings or level settings or like music volumes or theme colors or number of levels completed or anything.

I will give you an example of the use of this script
If I have my game released on play store and I have used this script to store the player's jump force or walking speed and enemies frequencies of coming in the way of player.
And the default file is stored on my server in an json file.
So everytime the game connects to the internet it will check for the json file changes and if I change any values in my json file it will be updated in every json files across every devices.
So this way I never need to update the game for just minor changes like these.

And this cannot be possible without any JSON parser and I use SimpleJSON which is so much cool script and easy to use.
####Here is the link of [SimpleJSON](http://wiki.unity3d.com/index.php/SimpleJSON)
Download the zip file from the website and copy the one file SimpleJSON.cs and place it in the project files folder.
***

I will initialize some variables first 

```
public string URL;
    string file;
```

In the Start() I will get the file path which will be used to create and load json file.
Then check for the file with the extension or by name whatever suits your condition.
If the file doesn't exist it will create the json file with just a curly braces as the default data in it.

```
void Start()
    {
        data = this;
        file = Application.persistentDataPath +"/SavedSettings";
        if(!File.Exists(file+".json"))
        {
            File.Create(file);
            File.WriteAllText(file+".json" ,"{}");
            File.Delete(file);
        }
        Print(“File Location ”+file);
      // Remove the comment from the below line if you want to update the json file from the given url in inspector.
 	//    StartCoroutine(GetLatestJsonFile());
    }
```

Now to update values of a node this method will be used to save/update data in the json file
It will read the whole json file and then create a node if doesn't exist or update the value of that node.
This method is UpdateFloatData which obviously means to update or create float data from the json and this way you can create/update Integer and string data too.

```
public void UpdateFloatData(string keyName,float FLOATvalue)
    {
        StreamReader sr = new StreamReader(file+".json");
        string readtoend = sr.ReadToEnd();

        sr.Close();

        SimpleJSON.JSONNode node = SimpleJSON.JSONNode.Parse(readtoend);

        node[keyName].AsFloat = FLOATvalue;    
        File.WriteAllText(file+".json" , node.ToString());

    }

public void UpdateIntData(string keyName,int INTValue)
    {
        StreamReader sr = new StreamReader(file+".json");
        string readtoend = sr.ReadToEnd();
        sr.Close();
        SimpleJSON.JSONNode node = SimpleJSON.JSONNode.Parse(readtoend);
        node[keyName].AsInt = INTValue;
        File.WriteAllText(file+".json" , node.ToString()); 
    }
```

Now to load the json data from the file it will read the complete file and then parse the file and get the node's value just like we do it regularly.
This method gets only float data you can also get the Integer and String data and it's code is also given below.

```
public float GetFloatData(string keyName)
    {
        float tempValue = 0;

        StreamReader sr = new StreamReader(file+".json");
        string readtoend = sr.ReadToEnd();
        sr.Close();

        JSONNode N = JSON.Parse(readtoend);
        tempValue = float.Parse(N[keyName]);
        return tempValue;
    }

public int GetIntData(string keyName)
    {
        int tempValue = 0;
        StreamReader sr = new StreamReader(file+".json");
        string readtoend = sr.ReadToEnd();
        sr.Close();

        JSONNode N = JSON.Parse(readtoend);
        tempValue = int.Parse(N[keyName]);
        return tempValue;
    }

    public string GetStringData(string keyName)
    {
        string tempValue = "";
        StreamReader sr = new StreamReader(file+".json");
        string readtoend = sr.ReadToEnd();
        sr.Close();
        JSONNode N = JSON.Parse(readtoend);
        tempValue = N[keyName];
        return tempValue;
    }
```

Now If you want to update your json file from the server.
You can use this method to update the file.


```
void GetUpdatedSavedSettingsFromInternet()
    {
        StartCoroutine(GetLatestJsonFile());
    }


    IEnumerator GetLatestJsonFile()
    {
        WWW textData = new WWW(URL);
        yield return textData;
        File.WriteAllText(file+".json" , textData.text.ToString());
    }
```

I think this would be useful to someone

The complete script can be found [here](https://github.com/prashant-singh/unity_general/blob/master/Scripts/ScriptDataStorage.cs).



