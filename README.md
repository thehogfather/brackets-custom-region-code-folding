### Custom region code folding

Define custom words to designate the beginning and end of a custom region.
For example in your project's `.brackets.json` file, use `"custom-region-fold.endRegionWord": "close"` and ` "custom-region-fold.startRegionWord": "start"` to set the words `start` and `close` as designators of the beginning and end of a custom region.

The  custom regions should work in any language recognised in Brackets and the keywords for designating the start and end of a custom region can be declared anywhere within  a line comment.

The following are examples - `start` and `close` are used as opening and closing keywords:

1. You may annonate your custom folded region with any text, simply by ensuring the annotation appears before the keyword you've chosen as `startRegionWord`.
   ![Alt text](./screenshots/desc_before_keyword_open.png?raw=true "Annotation appears before keyword")

   ![Alt text](./screenshots/desc_before_keyword_closed.png?raw=true "Annotation appears when region is closed")

2. Any words placed after the `startRegionWord` are hidden when the region is collapsed as shown below.
   ![Alt text](./screenshots/desc_after_keyword_open.png?raw=true "Annotation appears after keyword")

   ![Alt text](./screenshots/desc_after_keyword_closed.png?raw=true "Annotation is hidden when region is closed")

3. And here is the scenario when there are no annotations
   ![Alt text](./screenshots/no_desc_open.png?raw=true "No annotations before or after keyword")

   ![Alt text](./screenshots/no_desc_closed.png?raw=true "No annotations when region is closed")

### License
MIT-licensed.
