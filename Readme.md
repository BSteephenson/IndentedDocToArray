#Indented Document to Array

If fileContents were the following

```
level1
	level2
	level2
		level3
		level3
	level2
		level3
level1
```

parse(fileContents) yields

```
[
   {
      "content":"level1",
      "inner":[
         {
            "content":"level2",
            "inner":[]
         },
         {
            "content":"level2",
            "inner":[
               {
                  "content":"level3",
                  "inner":[]
               },
               {
                  "content":"level3",
                  "inner":[]
               }
            ]
         },
         {
            "content":"level2",
            "inner":[
               {
                  "content":"level3",
                  "inner":[]
               }
            ]
         }
      ]
   },
   {
      "content":"level1",
      "inner":[]
   }
]
```