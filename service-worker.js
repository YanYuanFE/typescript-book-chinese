/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "68f39ca4a614d49010cc928eb376f28a"
  },
  {
    "url": "assets/css/0.styles.1e9dd1c2.css",
    "revision": "0d08ddf63bb9f21642c12addc4f4c5ef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.28954348.js",
    "revision": "e08110f2a7c00c8f431dac1f68d07ab4"
  },
  {
    "url": "assets/js/11.4bb0bd79.js",
    "revision": "d92c923cdf73bb63661379703c970a7f"
  },
  {
    "url": "assets/js/12.ab80d5e1.js",
    "revision": "86f76c4b55bc3852718ca4a3db65a39a"
  },
  {
    "url": "assets/js/13.c8e4c8f3.js",
    "revision": "20a65c469e43ca10b5e97cf5fbf8ac2e"
  },
  {
    "url": "assets/js/14.7d9f5f1e.js",
    "revision": "1aa46fe3af6a0dfec723f336476a1e3f"
  },
  {
    "url": "assets/js/15.948ce7cc.js",
    "revision": "6e7f119e419e2b85eec4935898bfc8c3"
  },
  {
    "url": "assets/js/16.a3875312.js",
    "revision": "72ad20ace71a2a3d7a095ea206468d6a"
  },
  {
    "url": "assets/js/17.aba37dfc.js",
    "revision": "2a1f971836f9f4623afda668fdc51807"
  },
  {
    "url": "assets/js/18.7a01a0ca.js",
    "revision": "ae152563e5993498b059fd8f7aa94798"
  },
  {
    "url": "assets/js/19.dc524964.js",
    "revision": "48c88907abee0b09a842da3088942039"
  },
  {
    "url": "assets/js/2.46f75de9.js",
    "revision": "9d70c102bb1f8fc49c3562925fdcc914"
  },
  {
    "url": "assets/js/20.48ebdc87.js",
    "revision": "bffe3f871e53d1916192ecf423cd4bc6"
  },
  {
    "url": "assets/js/21.874a82fc.js",
    "revision": "e2fefdcefdaa839a453cf9dd27197db1"
  },
  {
    "url": "assets/js/22.54c324b3.js",
    "revision": "45c1982571fbe3999bbe1c8b005123c3"
  },
  {
    "url": "assets/js/23.9e66c435.js",
    "revision": "ac25acb5c0f67c01feadfcc99a41d233"
  },
  {
    "url": "assets/js/24.321ed17b.js",
    "revision": "461d697312534f9c1ddea9e0d28adadd"
  },
  {
    "url": "assets/js/25.30d15e26.js",
    "revision": "a9709a9238de194e64ea376b5ed5b2eb"
  },
  {
    "url": "assets/js/26.710afbb2.js",
    "revision": "d7f82f01712384cd53529fcc08c3b293"
  },
  {
    "url": "assets/js/27.b76c0044.js",
    "revision": "482c5a4dca0da640811ccb2627753461"
  },
  {
    "url": "assets/js/28.68558508.js",
    "revision": "323baa4fbd008e9b38eb9bee7fd75455"
  },
  {
    "url": "assets/js/29.7f3802da.js",
    "revision": "5a7b5b955f192123c032b216ad0a2a53"
  },
  {
    "url": "assets/js/3.2c7f7618.js",
    "revision": "fab5a02067447102d7ad949cad439c8a"
  },
  {
    "url": "assets/js/30.48ccc8c2.js",
    "revision": "1b6497eb0d2233231019fd5b5d621fdb"
  },
  {
    "url": "assets/js/31.7ab7f02e.js",
    "revision": "9429752fa486bc8eb4332d0d91e15764"
  },
  {
    "url": "assets/js/32.e6d8cf4c.js",
    "revision": "44abc2cd7e58b83bcbb286bd78915ed9"
  },
  {
    "url": "assets/js/33.17a439c1.js",
    "revision": "0d915f31e6f6f34e18fc93c69d38be5e"
  },
  {
    "url": "assets/js/34.7c71b849.js",
    "revision": "884548a426f3d8bccc47ecc00fe64db9"
  },
  {
    "url": "assets/js/35.3ef860d6.js",
    "revision": "739076f76b98f53792a2d718fc1722c5"
  },
  {
    "url": "assets/js/36.6981a90e.js",
    "revision": "86a6b7b8ec348259be1224a56065c6ec"
  },
  {
    "url": "assets/js/37.a15dda62.js",
    "revision": "daf04b51947a4d919f3af9b071de6290"
  },
  {
    "url": "assets/js/38.cb3d7308.js",
    "revision": "d0aa01d52b3ced95d4283cde6bf1ab97"
  },
  {
    "url": "assets/js/39.bb943913.js",
    "revision": "ed9b727e2f8021c916b4b741069f14e5"
  },
  {
    "url": "assets/js/4.7edbf204.js",
    "revision": "96f8516075720b7fcd4e94dae0756b43"
  },
  {
    "url": "assets/js/40.c003224c.js",
    "revision": "ffdd234688c87b9fef7021e48afc0515"
  },
  {
    "url": "assets/js/41.891eaeb5.js",
    "revision": "39841567ac60524d16837819dd3cd229"
  },
  {
    "url": "assets/js/42.f90f95f9.js",
    "revision": "9eaf9aec87c44344365fdc5516f8124e"
  },
  {
    "url": "assets/js/43.5b4edb2c.js",
    "revision": "d7c575ed20dc355ed5ff224973a0e217"
  },
  {
    "url": "assets/js/44.504b1f49.js",
    "revision": "8da95e9ed39d1745bf859c52cf378195"
  },
  {
    "url": "assets/js/45.29348bcd.js",
    "revision": "4748a7e9497f47bfac00e362c032bf7a"
  },
  {
    "url": "assets/js/46.00362263.js",
    "revision": "0a426609dc41f1adbc7fd8e95314adc1"
  },
  {
    "url": "assets/js/47.191986b7.js",
    "revision": "e6cd590071378e12067ccf0bcdf88ec7"
  },
  {
    "url": "assets/js/48.9bff6a3e.js",
    "revision": "ed72fb8a0885118ae04a87b217cc4f52"
  },
  {
    "url": "assets/js/49.93eb1cd9.js",
    "revision": "99ee85543c9cce5f1006e3fd30a5ea4d"
  },
  {
    "url": "assets/js/5.afa37596.js",
    "revision": "4f839157b644524179b704ebc9707a14"
  },
  {
    "url": "assets/js/50.f9f33ba1.js",
    "revision": "bec1dfc42033a85474014d679040c8d0"
  },
  {
    "url": "assets/js/51.701b365e.js",
    "revision": "6727f0c8f2f57d04db478f419ba5fb42"
  },
  {
    "url": "assets/js/52.c6ad0c10.js",
    "revision": "76d5a15833c940ab001aa0c18be783a1"
  },
  {
    "url": "assets/js/53.9addba92.js",
    "revision": "43d43376e8436e1b0bed68203c15a371"
  },
  {
    "url": "assets/js/54.d4b7e8b3.js",
    "revision": "d0466f400954ae0ab9dd5b9e7c7d516e"
  },
  {
    "url": "assets/js/55.17bd128b.js",
    "revision": "9e676bf54c9f896e772bb0692c642eff"
  },
  {
    "url": "assets/js/56.27e5318f.js",
    "revision": "b78e18f1b79c8eb242a98105b0ef6c5e"
  },
  {
    "url": "assets/js/57.ce2364ec.js",
    "revision": "3c7f097e88b08743809f280d829187c9"
  },
  {
    "url": "assets/js/58.fd74d3c0.js",
    "revision": "44957802a28b1d832e530f403cd4032a"
  },
  {
    "url": "assets/js/59.d7c170ab.js",
    "revision": "0614ef7ff6b699e3cc04d4be504d3051"
  },
  {
    "url": "assets/js/6.8f8e5025.js",
    "revision": "cde0d65cb67349289b94bf67e7aabbab"
  },
  {
    "url": "assets/js/60.c6d7c588.js",
    "revision": "b21270f1808c2fa876a9be2329605871"
  },
  {
    "url": "assets/js/61.c7a446fe.js",
    "revision": "92561f06aefbba19385f69dd07e2a5b2"
  },
  {
    "url": "assets/js/62.b5927520.js",
    "revision": "1f16187d282ec4a88bedd6510b906285"
  },
  {
    "url": "assets/js/63.a4c5d98c.js",
    "revision": "92574d0cf798ac6ea8a25111ccc72470"
  },
  {
    "url": "assets/js/64.521cebbc.js",
    "revision": "717fd67d00b1a7752b9e84377052fb71"
  },
  {
    "url": "assets/js/65.14f2bba6.js",
    "revision": "acd6c69f826dc37edc0436b8e5197a76"
  },
  {
    "url": "assets/js/66.d41067aa.js",
    "revision": "bb3eae67cfec91b44822d7424a9152ba"
  },
  {
    "url": "assets/js/67.093140cf.js",
    "revision": "920c2226ec7bfc9d138cbbc79ba31b09"
  },
  {
    "url": "assets/js/68.aa9d5a57.js",
    "revision": "73cff917bd50e6147fd6233dfc74e972"
  },
  {
    "url": "assets/js/69.7e1a2870.js",
    "revision": "484ebf29724e9ce2ae30eae195ffc3dd"
  },
  {
    "url": "assets/js/7.a3eb2ab2.js",
    "revision": "55fa9e054236eeb76e1e7a8b7a0b9ed8"
  },
  {
    "url": "assets/js/70.834a4538.js",
    "revision": "6ea7cd478452dc39a851715c84d5ff07"
  },
  {
    "url": "assets/js/71.450d4fd7.js",
    "revision": "0b8d1386ef61c9226ca9e8415a363745"
  },
  {
    "url": "assets/js/72.7a267c78.js",
    "revision": "9af92954016d7ac76a24e5131497d0b3"
  },
  {
    "url": "assets/js/73.5ce87ef6.js",
    "revision": "6d91901bcb4245ea6f4e755fc77fb792"
  },
  {
    "url": "assets/js/74.457e2b93.js",
    "revision": "07e54d70928537fe891307127df8dbb9"
  },
  {
    "url": "assets/js/75.0bd754c9.js",
    "revision": "932275ae0c3bf45f9c9d91eafce04882"
  },
  {
    "url": "assets/js/76.7f5c0fe7.js",
    "revision": "d3d81749b56d50a364448bafa37f99ff"
  },
  {
    "url": "assets/js/77.cbef4e11.js",
    "revision": "64d436f260e9b59286b9f8c8460a0fd9"
  },
  {
    "url": "assets/js/78.7b17001f.js",
    "revision": "ef86f3b1d9d97606523e97897cff8b25"
  },
  {
    "url": "assets/js/79.e83cc1e7.js",
    "revision": "5b63600a73275672bb4bd04e10731d2c"
  },
  {
    "url": "assets/js/8.ac199a37.js",
    "revision": "1fac6edeb2d80515afb33b82bd05de14"
  },
  {
    "url": "assets/js/80.64b22563.js",
    "revision": "b89c988dac7552bbfbeb2044124fcee7"
  },
  {
    "url": "assets/js/81.7b68082f.js",
    "revision": "1b7ac4ebf6a3193ca8e576bed27908b5"
  },
  {
    "url": "assets/js/82.cbf1c03e.js",
    "revision": "beef5036b79619dddead4653b8b44ca4"
  },
  {
    "url": "assets/js/83.439317c4.js",
    "revision": "60119455f2f6e3eb82ade6046a29b80c"
  },
  {
    "url": "assets/js/84.8c70cc4e.js",
    "revision": "5ca8650d265b60253672533db4ff958e"
  },
  {
    "url": "assets/js/85.da1821df.js",
    "revision": "2aeb2319cb92cf5fba4311bf72928f14"
  },
  {
    "url": "assets/js/9.288ed0bc.js",
    "revision": "7bc8c6e250aaa1dcbddf884c30dba7b3"
  },
  {
    "url": "assets/js/app.c466daf5.js",
    "revision": "73663843acca6d8b0b38f94b12db4f8f"
  },
  {
    "url": "compiler/ast.html",
    "revision": "c9490bb2895a6c9872775c289e639320"
  },
  {
    "url": "compiler/binder.html",
    "revision": "e1869ed00379fe072f029232337047f6"
  },
  {
    "url": "compiler/checker.html",
    "revision": "192f8e479914b81c3009e3aa88dc9e16"
  },
  {
    "url": "compiler/emitter.html",
    "revision": "e98a0a32f21ed5708fa11c6ef1d24543"
  },
  {
    "url": "compiler/overview.html",
    "revision": "a6eb71eeec8cbf491372729638644d92"
  },
  {
    "url": "compiler/parser.html",
    "revision": "572be49add10012ecb5176456c214863"
  },
  {
    "url": "compiler/program.html",
    "revision": "a6c4188e054d6bc20507758f31bbe6da"
  },
  {
    "url": "compiler/scanner.html",
    "revision": "f5ceaaa7b055ce852d9d14ec466c109c"
  },
  {
    "url": "contact.png",
    "revision": "de36f2215c396bf6f74409c047520234"
  },
  {
    "url": "error/common.html",
    "revision": "182af68d4bc620b965c2887e6302754a"
  },
  {
    "url": "error/interpreting.html",
    "revision": "575feda6668666c975995356a1d5b72e"
  },
  {
    "url": "faqs/class.html",
    "revision": "fa349e75fc47a65e9dd02b41fc2c85f7"
  },
  {
    "url": "faqs/commandline-behavior.html",
    "revision": "e631615e37ec6ddf7672f818d285c94a"
  },
  {
    "url": "faqs/comments.html",
    "revision": "5258e3e37e57d4e0ab9f5624f2939da8"
  },
  {
    "url": "faqs/common-bug-not-bugs.html",
    "revision": "baa4bef4c769aff699bf896fc03a0ff0"
  },
  {
    "url": "faqs/common-feature-request.html",
    "revision": "f5bd75fe5e9059178f07d18c9b23ccaf"
  },
  {
    "url": "faqs/decorators.html",
    "revision": "56759d8e9a45705bba7a109a50b3e64c"
  },
  {
    "url": "faqs/enums.html",
    "revision": "33777e4a7cb5af2cfc3b05b5a9ccee0a"
  },
  {
    "url": "faqs/function.html",
    "revision": "505d5679dc93a7dc47e507fe58cdc339"
  },
  {
    "url": "faqs/generics.html",
    "revision": "d43a0988174e724c35ad97d938851077"
  },
  {
    "url": "faqs/glossary-and-terms.html",
    "revision": "a11b0cc53f59689a5fe655b5e97927d9"
  },
  {
    "url": "faqs/jsx-and-react.html",
    "revision": "777f53ee0299efc943e9f5b46b1f1923"
  },
  {
    "url": "faqs/modules.html",
    "revision": "44c6714b93195ae8378c6afc2ea7871a"
  },
  {
    "url": "faqs/thing-that-dont-work.html",
    "revision": "bdf459aa2510db873c4f965d24538ba6"
  },
  {
    "url": "faqs/tsconfig-behavior.html",
    "revision": "8e20976d417742ff85ac93b96f3039b2"
  },
  {
    "url": "faqs/type-guards.html",
    "revision": "0db1ba0631fdecae41a0eed5396d5192"
  },
  {
    "url": "faqs/type-system-behavior.html",
    "revision": "f2b846ef93fe83991e3b8092d5c8d455"
  },
  {
    "url": "ide.png",
    "revision": "0552400adbb2b3fcbed10a98a02e2516"
  },
  {
    "url": "index.html",
    "revision": "64d5c64abfccde69e15cecddd2daff9a"
  },
  {
    "url": "jsx/nonReactJSX.html",
    "revision": "434c98cada841378e553391516fc0ccb"
  },
  {
    "url": "jsx/reactJSX.html",
    "revision": "1dae5e7b452037a8f0b6afdad02167e9"
  },
  {
    "url": "jsx/support.html",
    "revision": "cad50b917a4f7a538da0b1879052b037"
  },
  {
    "url": "logo.png",
    "revision": "166813938a8a65cf3197fa7da1d131f4"
  },
  {
    "url": "project/compilationContext.html",
    "revision": "d45ba6c072802a27379bf977db972c37"
  },
  {
    "url": "project/declarationspaces.html",
    "revision": "f00419f96c9851030d0fb8e29151c9fc"
  },
  {
    "url": "project/dynamicImportExpressions.html",
    "revision": "09e73131daa691c81b9e7d4ab62cb1c7"
  },
  {
    "url": "project/modules.html",
    "revision": "f36ba0a47dbb14280079cd7dc381197e"
  },
  {
    "url": "project/namespaces.html",
    "revision": "f97b2713ff7f8bd17152867ffbc7bd57"
  },
  {
    "url": "tips/avoidExportDefault.html",
    "revision": "1ed8aed039d28e9fc20ef967e8360563"
  },
  {
    "url": "tips/barrel.html",
    "revision": "19f8ef580082c0b28c73feaa7d7745d7"
  },
  {
    "url": "tips/bind.html",
    "revision": "09348d91d22f743ff63cb22ec131f6f6"
  },
  {
    "url": "tips/buildToggles.html",
    "revision": "0a2bbb3b034121939aa1697c8c765275"
  },
  {
    "url": "tips/classAreUseful.html",
    "revision": "d9cec75609a84e14d79229c5954d7299"
  },
  {
    "url": "tips/covarianceAndContravariance.html",
    "revision": "8efd20c10d5c2146392a5efbdb390e64"
  },
  {
    "url": "tips/createArrays.html",
    "revision": "14e8e8bf1d9c48fc4f032061ad21c5ab"
  },
  {
    "url": "tips/curry.html",
    "revision": "07146eb8acc8ce7d2abad9718c87d6e6"
  },
  {
    "url": "tips/functionParameters.html",
    "revision": "5f570a09c72c5c5df6d4e17159556143"
  },
  {
    "url": "tips/lazyObjectLiteralInitialization.html",
    "revision": "403d54fa094ba6da02e558bfd1ff6811"
  },
  {
    "url": "tips/limitPropertySetters.html",
    "revision": "10d99394ead8dea42c798dc9d1f17de0"
  },
  {
    "url": "tips/metadata.html",
    "revision": "b9b63406d7996b34f32e40e9c76716a1"
  },
  {
    "url": "tips/nominalTyping.html",
    "revision": "19e97db300445d4b008c5cd6fe9e90b5"
  },
  {
    "url": "tips/outFileCaution.html",
    "revision": "1446732df18b3ab895a29ea18bb8defb"
  },
  {
    "url": "tips/singletonPatern.html",
    "revision": "0318b63d86c1be9a935a3c2bd6365900"
  },
  {
    "url": "tips/statefulFunctions.html",
    "revision": "8d169d195ee465b06a6b340122331792"
  },
  {
    "url": "tips/staticConstructors.html",
    "revision": "9825bf653d3c97a97e7da7af7c8914f3"
  },
  {
    "url": "tips/stringBasedEmuns.html",
    "revision": "daa0826277218a663f8f58974788c7c5"
  },
  {
    "url": "tips/truthy.html",
    "revision": "21fc870433e907c2744ec2ff94447a83"
  },
  {
    "url": "tips/typeInstantiation.html",
    "revision": "9cfbdd5705a7d7ed9cfd822bf6e2229c"
  },
  {
    "url": "tips/typesafeEventEmitter.html",
    "revision": "edf17570abf3c3b3876cd2b400b61d95"
  },
  {
    "url": "typescript-downloads.jpg",
    "revision": "c820bb267e14bd6881db03696f3ae603"
  },
  {
    "url": "typings/ambient.html",
    "revision": "1b524310eeac93266aba1bd34fe95f2f"
  },
  {
    "url": "typings/callable.html",
    "revision": "e90550649ca1b7051ad1537f74dd8e5f"
  },
  {
    "url": "typings/discrominatedUnion.html",
    "revision": "5b1bc2754e37a5c164c0e578f71c2621"
  },
  {
    "url": "typings/enums.html",
    "revision": "167c5c43198ae3efb454558b86ac2e51"
  },
  {
    "url": "typings/exceptionsHanding.html",
    "revision": "a16a3285032575a90ec1ca87fce95899"
  },
  {
    "url": "typings/freshness.html",
    "revision": "dcff2247dcc7b7906c2707575c02491b"
  },
  {
    "url": "typings/functions.html",
    "revision": "77da955ffa408a9666f5b09216df3701"
  },
  {
    "url": "typings/generices.html",
    "revision": "4606f2ebb93583cb7705c7814de7c074"
  },
  {
    "url": "typings/indexSignatures.html",
    "revision": "879fc599d21f5a72a81db2b21ba54188"
  },
  {
    "url": "typings/interfaces.html",
    "revision": "70d2b04a21ad41d1a00fb6781676a8e7"
  },
  {
    "url": "typings/lib.html",
    "revision": "0526a4ea849d5a7fa397639cddb687c2"
  },
  {
    "url": "typings/literals.html",
    "revision": "9dfdf41a16ec760edbff1d066d0fa42d"
  },
  {
    "url": "typings/migrating.html",
    "revision": "d4e1de870553d413c10fe4780b31447e"
  },
  {
    "url": "typings/mixins.html",
    "revision": "69384452872056eb0d85fa1f80006e47"
  },
  {
    "url": "typings/movingTypes.html",
    "revision": "9c8690b21061257ea0bf28c857b94d6c"
  },
  {
    "url": "typings/neverType.html",
    "revision": "af3a725f391a12e3c573fc3f83c7561e"
  },
  {
    "url": "typings/overview.html",
    "revision": "935a869e29302042ff56127be28738b5"
  },
  {
    "url": "typings/readonly.html",
    "revision": "939295a5620e2ea8c8a87e96483f7715"
  },
  {
    "url": "typings/thisType.html",
    "revision": "bb9caef7c1e078950a7f02384b705b81"
  },
  {
    "url": "typings/typeAssertion.html",
    "revision": "7bf3d299f8122ef60ab47508d5e391a1"
  },
  {
    "url": "typings/typeCompatibility.html",
    "revision": "4f94af1cee57a0f8570a0e3c805c127c"
  },
  {
    "url": "typings/typeGuard.html",
    "revision": "b5b6d659cae1a429abd4b7c36d6a633d"
  },
  {
    "url": "typings/typeInference.html",
    "revision": "5d7f5be24e137bfb11d53a285f5231cc"
  },
  {
    "url": "typings/types.html",
    "revision": "1a939e0dad728a03693c6bc11bff26f4"
  },
  {
    "url": "wechat.jpg",
    "revision": "36c771d59ed899617f1e6c49f9ee812f"
  },
  {
    "url": "zhifubao.jpg",
    "revision": "2a94b23f0d0d6d55befc332742849b67"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
