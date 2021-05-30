---
sidebar_position: 1
---

# JMC properties

JMC properties reference

| Properties             | Module | Default | Description                                                                                                                                      |
| ---------------------- | ------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| jmc.data.root.folder   | Jmeter |         | Root data folder, all component reading csv data, will have this value as root folder.                                                           |
| jmc.script.root.folder | Jmeter |         | Root script folder, all JSR223 component will have this value as root folder                                                                     |
| jmc.result.root.folder | Jmeter |         | Root result folder, all component that generate result (\*.jtl) will have this value as root folder.                                             |
| jmc.script.resource    | Jmeter | true    | Attach script file as content, in JSR223 if true content of file will be add to componenet as contonent, else component will reference the path. |
| jmc.data.resource      | Jmeter | false   | Get Data csv from resource, use only when executing from code source.                                                                            |
