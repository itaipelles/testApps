module.exports = {
  editorReady: function(editorSDK) {
    const WIX_CODE_APP_DEF_ID = "675bbcef-18d8-41f5-800e-131ec9e08762";
    console.log("Before Installing WixCode...");
    editorSDK.document.application
      .install("token", { appDefinitionId: WIX_CODE_APP_DEF_ID })
      .then(() => console.log("WIXCODE INSTALLED"))
      .then(() =>
        editorSDK.vfs.writeFile("token", {
          path: "backend/some-file.js",
          content: "// js content"
        })
      )
      .then(() => console.log("WROTE A BACKEND FILE"))
      .catch(e => console.log("ERROR: ", e));
  },
  onEvent: () => {},
  getAppManifest: () => {}
};

//App ID: 153fb854-0fbb-93e4-7661-dfbb5fc3fc77
