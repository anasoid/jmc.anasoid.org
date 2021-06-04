---
sidebar_position: 30
---

# Variable

org.anasoid.jmc.core.wrapper.jmc.**Variable** are a simple container to use variable when working with JMC. it need the variable name as input for Constructor.

the folwing method are available

1. getName() : return name of variable.
1. getValue() : return the value = **${** namevalue **}**
2. asVariables (...) : return list of variables from string array or list.


## Usage



Most component using variable in Jmeter accept Variable than string or only variable.

Ex : Csv input Component accept list of variables and doesn't accept String with comma separator.
