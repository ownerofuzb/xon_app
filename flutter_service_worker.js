'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "5fcb186a0ad1395a07d0093a2de0db0c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ecf39cc1edafee9f12c56248a1efab76",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bab93b579ebb3b7436a6f0c031b03511",
".git/logs/refs/heads/main": "555511a96e8ec6a1e8a1d2637530fcdb",
".git/logs/refs/remotes/origin/main": "ce6a6681f491f6da42811a14b9a7539d",
".git/objects/04/772396ea3e40dc1d2cd3c963b334c6a1726b63": "1f61a326241068eba2e9e1fd031ea941",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1c/0410602c1ae5f58c3b781e1fe4a79ad2321c2c": "2152d04e2efd3818faef4f23d9c95804",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/22/1146f56a263bb2bc29f2f70a47f304053387ba": "b3bf3b602f5f1f2be73ad7a535130373",
".git/objects/24/ac53390dd56cc5eeeb0a37b3c7b7a73dd09be0": "f637b4dbf2ccf2fb30c0c7d69679a47c",
".git/objects/29/30b0e1753416e12f4268a98f9a5e8be35778a3": "1e787c669c61d9a7173bd1d627323108",
".git/objects/2e/2d823e8f0496a0b46dd6c0520ea5a160113f13": "79fb6220e6391bb05201fd5e12a3152c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/b7ef617271ba5102d741d864b50cd424925d1d": "1acfbb35aae597afdc65a27fa5c9d74c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4b/6375f19fe5a70bed7108074cdf6e334f82540b": "ac3e18ff1265d5b6cb0a02d505b9f0f4",
".git/objects/4e/a6446e45262d9f94b0e33a6f1f456d9e0e4998": "be3bcb519e2a5539536702fe1bc2a11e",
".git/objects/52/0d923b3c612c6a23f61dadc219ee8be61a810e": "35cdfec7c19cae7af9a753de896e60d4",
".git/objects/52/a814dc51f354586c587e3ba294f093b6c00152": "a45344ce695402e8a165397f7dfa2bd5",
".git/objects/53/b76b334c647205400cc7d5264e70863dabf191": "41414dd6a8a9c12e75b9d008b924c5c6",
".git/objects/54/bfce1b14b9c3a7112779f99e8bd12f52bbf4fa": "fe359ce0735e9dd8c8f0c80bbebfb0f8",
".git/objects/56/5dc5c4d3111fdb7ccc8449fd74f349878626fe": "e5f31dd0a0e1fbade7633dbc0947e30a",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/6e6fa4074bf699a51ef199087207a49867b89e": "18bba158745808828462f490402714c4",
".git/objects/58/af380dd9555756de701e45c4d32f532efe5437": "a513cee2ff0d43bb1204c3f1d653411a",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5c/9bee035113de605d1e4a300816549c52444cbb": "db61978bec7c7e76b7b8962c013bfefa",
".git/objects/60/bc11eaa64038dc0a1ba122d84f11fccf720a77": "eba118914712ce8b99259033cc451a77",
".git/objects/61/f4c796a2f456c83345823c36dcf20df3f77b54": "a8c988d87195e1c64202648c5f1920e1",
".git/objects/62/ac156f4caf858f4b12ae0e49174a60b2f3f641": "0881e8c1eb715877ce7f3eb83ecd6eda",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/68/8fe2392979544c203cfa68e620e17b9af3789d": "896065302de5ef611c46496a76e603d6",
".git/objects/6c/8bb8e39c9868a01d38d16f356baec69735cf00": "fa3d32f728b4d6425da9c9e36b52c9fc",
".git/objects/6d/9e07a6ffec94f3102803ddd4bae0469f6430ad": "ce73366da16ea9d4715a854872430a72",
".git/objects/6e/0340044e7f18a92549683568d93c16e723b5ee": "f3a3c8fac85718a08da1a060b4b341be",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/75/06fdc0ab12f97bb437963cd94f0625947dc072": "8e51add5f9b33c8a3913766e785bac96",
".git/objects/76/5ded732f4383154e156001838d6b0eef1ed75f": "6054f807e3212ef70ee88e0fd4684834",
".git/objects/79/ef83915f2abd4ecf5344b62df3279bddf26062": "41d7fdc5173e4ad88677dd842f827abd",
".git/objects/7a/ca585ab1aba659c22eae4e026e7d87b2068fc1": "1f45d6829c79fc7c83484379fd5258df",
".git/objects/7d/a44d50d4a20b23707b7d89ef3b5cc385d0f4ac": "9948edf92688c732efdaae2e22e6a71c",
".git/objects/80/fc981860a9dd7f6de3e66e8f77a58ec9345366": "2986d40fff3fdfd1cb3eb8efed7db206",
".git/objects/81/f779dc8cf2d5f373298ec4fab3d95872909b07": "665ce08ffaa4153caa0445c4e9f9354b",
".git/objects/83/7044241a17bbf1d07c350fbf963bfc3c881b38": "0d539d65acd30c917405d74698b9932f",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/6ebc9743d249bcf926f9f091727c3b4e9e2763": "bbd346758af7a468fcff4afc59bf6991",
".git/objects/86/0ab9f7fe052cd782853d7cf9cfa7ddb69df561": "b0c4dbae4eabd6573f3dcf9dc9d8243d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/0ca22f7347647cfef5880ba1b9c5b77d5a5bdb": "0fd87c5d148925c38f2dc6ac3c77a483",
".git/objects/93/1e18962c876aefa1e8d13838b5e3c3abe03897": "ca1fe598a829ad8bc061fa46c3744360",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9e/8e15bb76e7354a7318ada0af82ab7cd0c0ddf6": "3a805585613b687be1d3b2bfa89b602e",
".git/objects/a8/07cb07ec5122ef831a8c1e84a9b07d0cfe9c6d": "95422eac1bad5c1dbefdb3e4831d62d2",
".git/objects/b2/d3c8319340ad0c14cae9cf957efb4c84e55044": "5867a01566a616c042350f82985d9956",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/51c25e7a8f4ad93ce586de8661b22c18cd669a": "117b44d07a2463bdb8d83ed3ddda63e7",
".git/objects/b6/a41a5113c371d99961c3e20a55268f15f13daf": "7805cebea74ae8b072a0b80e6b2c496b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/82105a5edc225ef3a45354441586cd960ee14b": "791d3893c8a9eb41d30b94137e5d4bac",
".git/objects/bd/67a2440cdef803979a992dedc6c4e9967e9fb1": "12c4c89f8fa8ec7e93138e7db171fe79",
".git/objects/bf/4af6797b04d942f6ae1069b352eecd1eb2a2bf": "13661dd59c2be7135d65406b0d56e675",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ce/390debe2318400dfa5c553ab70d8955f52cb19": "57e8c6cf5501ce7bcec6b252df3cfc2e",
".git/objects/d0/a6fddd37ad97677a2bd6ef2786f820bcbcc2f6": "7ee582bf15cda7a462f6e7af1fab1810",
".git/objects/d0/bd971d78270a6f6f90dcaa041a579264ff6a70": "e4f18b2656822096311eb45d863543a4",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/e2261c475d221761347edca19e1d1f14ed5ff8": "5edb0d9f5c77b56ea5662db703d04ed1",
".git/objects/d8/60e0fa176831cf8800b0a704e19fb4e3b4a85a": "9d612078622b7a72e2f1565eb640c905",
".git/objects/da/971661242e6cfdc392d0b4e2d04f298d35364d": "dba03f6d6363ac34a368499f783fadf9",
".git/objects/de/8bd2874322660a7890afa7e881b23c529c354d": "daafbb9d9d3c33aebd01b084321f3c8c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/5a8293fca707405f2998059dec3c3e4e3104ac": "f9fb89eae83da4758c90b884e841fb05",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/71877a3e796730370ea1396515870aae68669d": "9375c7ee795578a28d4fa7aa044cebec",
".git/objects/fb/3bb696f3a00fc2545d8ab37eaadbaac5555d0f": "41656e560ac8d6ff3d843ba9105aec57",
".git/objects/fe/7e9f03cfa85de670758caaf0d1e48974c567d6": "37119f9f58ea79600efdc5abb33e9852",
".git/objects/fe/b923193313be2c33af92df86fc627fc96aa89c": "48d3914d107178d5a36ac94eb3d8b760",
".git/refs/heads/main": "f97e7dac246592467aad6671b8564a14",
".git/refs/remotes/origin/main": "f97e7dac246592467aad6671b8564a14",
"assets/AssetManifest.bin": "272611ba3072899a4d3ca2e04775accb",
"assets/AssetManifest.bin.json": "81a2aa85db1b72faecf478844dff09b4",
"assets/AssetManifest.json": "65aa2fc96429a2783f2d9d04c3a9e8a4",
"assets/assets/images/2%2520room%2520apart%2520big%2520detailed.png": "e26ea53ade865124cedfb1512791f920",
"assets/assets/images/2%2520room%2520apart%2520big.png": "b16bbca2f88cb93204c8e10403ffdd41",
"assets/assets/images/2%2520room%2520apart%2520small%2520detailed.png": "befe5c3831276c3dfc0b81e1f5a481e4",
"assets/assets/images/2%2520room%2520apart%2520small.png": "ca42f20e8fc1bb4795f4fa88413099b7",
"assets/assets/images/3%2520room%2520apart%2520detailed.png": "ea4dcbb8fea9a556619df6fdb3fcef23",
"assets/assets/images/3%2520room%2520apart.png": "e74277c85b0a2a2db3a70c66ff1ff62b",
"assets/assets/images/A1-block.png": "ef0cd62f5290be370acdb7009264ccea",
"assets/assets/images/A2-block.png": "7abfea6dc68c5e081e8aab9a436eb85f",
"assets/assets/images/A3%2520floor.jpg": "3a59e5c0180de6113da2c5db2eae1e0d",
"assets/assets/images/A3-block.png": "897bc0bcd7c129492442ce41e6b26e36",
"assets/assets/images/B1-block.png": "40be6bf49d5d6145457770da8fed680c",
"assets/assets/images/B2-block.png": "f88ac9624941638b4ac0a7eb51a8e2ca",
"assets/assets/images/B3-block.png": "716fb65ea45057670e91393acd93f3f9",
"assets/assets/images/background.png": "35a4082acb8127ec1aecc17d8d7d6b3e",
"assets/assets/images/block%2520details.png": "b720e02bd5687b515f875e0319d13f71",
"assets/assets/images/Blocks.png": "ebafb53ac2aa1fcdaf108f33c9c415e3",
"assets/assets/images/log-in%2520balls.png": "bd4d290202345f5d4b9600f3a235fe8c",
"assets/assets/images/logo%2520b.png": "d6d02028c949e3bf6da705a68560a3d3",
"assets/assets/images/logo%2520t%2520w.png": "a73f67d8f7ae9f3f08133108808b3a40",
"assets/assets/images/logo%2520t.png": "c8a76eddbdd253adb4ee59f369e2dc6a",
"assets/assets/images/logo%2520w.png": "45378b8cc61928578bda5de60620e620",
"assets/assets/svgs/f_logo.svg": "6912a762a309d1810ce577dc70d166c8",
"assets/assets/svgs/g_logo.svg": "e9fe8bd06ae007ab2c7b2d31b47b1c2b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9d61bf33615199e8791f6d312420fd27",
"assets/NOTICES": "6448a57b647ce8d2d9fcfbd907579d1d",
"assets/packages/animated_snack_bar/assets/monochrome/check-circle.svg": "f6d9dd67711da5b6d4d965f66c10cd07",
"assets/packages/animated_snack_bar/assets/monochrome/comment-dots.svg": "44311bf381ea1155bfe38c40d44c577a",
"assets/packages/animated_snack_bar/assets/monochrome/exclamation-circle.svg": "63ffc503c8e024f9752866e021afb744",
"assets/packages/animated_snack_bar/assets/monochrome/exclamation-octagon.svg": "ab5fb6de2478b95f911cebb5cf6af9c3",
"assets/packages/animated_snack_bar/assets/monochrome/exclamation-triangle.svg": "10427de487dc532646c4a11f6be3fe84",
"assets/packages/animated_snack_bar/assets/regular/check-circle.svg": "0936541fbbf9ebf325169373c2d2439a",
"assets/packages/animated_snack_bar/assets/regular/exclamation-circle.svg": "69c777fe5b9ffd2f8286ca47f98d1a31",
"assets/packages/animated_snack_bar/assets/regular/exclamation-triangle.svg": "57a895d149648e4b69c7681d4efb2052",
"assets/packages/animated_snack_bar/assets/regular/info-circle.svg": "e733e8ecda8758e6b69d20cc1ca1c6c4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "c9654c63ebaa80212702d9724c303e0f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fa304db2901b71d2c4906c9ec35cf2a7",
"/": "fa304db2901b71d2c4906c9ec35cf2a7",
"main.dart.js": "191641b7b168b3d54b4752c9c133d6fa",
"manifest.json": "e9ce6c85be5b96bd4cc3268ca702f71a",
"version.json": "242d06116a7fbf0641df0e95bb9b2db1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
