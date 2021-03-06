let _editorSDK;
module.exports = {
  editorReady: function(editorSDK) {
    _editorSDK = editorSDK;
  },
  onEvent: ({ eventType, eventPayload }) => {
  if (eventType == 'siteWasPublished') {
    const WIX_CODE_APP_DEF_ID = "675bbcef-18d8-41f5-800e-131ec9e08762";
    console.log("Before Installing WixCode...");
    _editorSDK.document.application
      .install("token", { appDefinitionId: WIX_CODE_APP_DEF_ID })
      .then(() => console.log("WIXCODE INSTALLED"))
      .then(() =>
        _editorSDK.vfs.writeFile("token", {
          path: "backend/test-file.js",
          content: "// test me"
        })
      )
      .then(() => console.log("Created backend file"))
      .then(() =>
      _editorSDK.vfs.writeFile("token", {
          path: ".schemas/TestCollection.json",
          content: '{"id":"TestCollection","displayName":"TestCollection","displayField":"title","fields":{"title":{"displayName":"Booboo","type":"text"}}}'
        })
      )      
      .then(() => console.log("Collection has been created"))
      .catch(e => console.log("ERROR: ", e));
  }
  },
  getAppManifest: () => {}
};

//App ID: 153fb854-0fbb-93e4-7661-dfbb5fc3fc77
