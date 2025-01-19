'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4d637d37b5ef46274393899205774420",
".git/config": "439ae3055f35c25994b14122757d834a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b548c6cf8c4db6e33fde359440b9a484",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "34bbf06f32c7506eacfd968f20000e14",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d6ccf487f1eea6c1faf3ad184947cf6a",
".git/logs/refs/heads/main": "a20fa13ec4749871e7a5a77a4eaab259",
".git/logs/refs/remotes/origin/main": "c0fb1aa1669ad6fd4aa5e0d5381f1a3c",
".git/logs/refs/remotes/origin/master": "86aa4055eaee572a7a140464e540411f",
".git/objects/01/69ccda700bb723050ba935277661fc7a554e31": "9331482d99dccd39b8d2e518cf3b590c",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/1d/43e8b875d0b15a8133eae67186b58e131e97b4": "682fb919836c6f29136f9ac1529dc1d5",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/23/a7d151ad48ae32785861895faaf5fe5eb2ea60": "ef9df80dde0eb0be98a8a7eee73e7d29",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/33/8a517cfe6ef594f4d46284d905de6e38ebe564": "89b99926f063642b5f96e4e7761831da",
".git/objects/35/1b6b8cf20f8c97eca0ddbec14d1f7a0d200086": "e50c31e70e870ae5457fba5aaf43e85e",
".git/objects/42/9642764d38f29ebdae198ec6c553f3b37194cd": "ac7e986beb3cc917885c36ad96b0dc13",
".git/objects/42/eeb2416b10b501916e316bb3e97a5e90f5ef40": "647a4ef0039c946f445d59a26364d382",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4f/046dae13c5ad541f0895a8675fd64a854e61d6": "0ca8e993b813010ce5796ac2164387eb",
".git/objects/51/7d4f9242cba0515ab78445e4cdd3f94e62767c": "c5af300820a25eb6b4e3c1fcf6a2ea2d",
".git/objects/59/a83e14b9c4ac56f1428ddbdd9ac71dd5b8b350": "89195d5d5d6a31b939bd23b88deb18ec",
".git/objects/5b/7a79886fd53b0b529d777d02f31f80682263a1": "b1948d0fb0fa809f05eed940dc511779",
".git/objects/5c/25619defdca7920311b627f5e34f4ee399937a": "2f01b9b4d9ba59054629ca5d853b3574",
".git/objects/63/5e487389fe3867053a5c860ef901118b6b24fd": "5f88c0f5bd60d170a8cb53abe35903bc",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/69/4f80d3c304919ef31911d93d085b91787a4e52": "c46b56b0a1ef7573bfcbfaffdc119e77",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6c/9420649cb0ea81c45220a9e423415d5ccea111": "7ea08f600d990878b05e115362f32438",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/70/72e37b2d13d2d418d86deafa894a2fd82c814c": "0477cbe85d9779be65b62b1fb0ee3732",
".git/objects/71/a0aa1e9936fa941c142f67d92546204fb34460": "d819d120209629cdc5f4c06eaeb4f38e",
".git/objects/73/05edfa32ed4f0d9fddc8d0132171645115c210": "b60eedf06beddbce42918520bb447030",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/75/72107ace539ca149a939de16166a36d83ea369": "85c4cfdc1f691a92142175acb5d7a8a9",
".git/objects/7a/3ace71c5e363b96692a4f957f31f9f18ef4924": "63f37432bcf530a4bf729ea3dd7610a5",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/82/044c8657a12750fd1d506272e044c4e2d489ba": "72876531153a8f5cd1aeb948fa25bd14",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/90/729e640928a0ddc04546e25133a5158003b760": "893311d402c8a2c3869ef67f4473aae1",
".git/objects/90/a1c4f6ef749e92fba75749d92838effc72f103": "0cd0fc3e1ebce9af0ce6b75b2e5da3b0",
".git/objects/97/333d30e271d18646ddedb53ac6321db529233d": "de277e535961bf5fe2019c262dbd6868",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/9b/c22d68021fb1d4849f684422319fefa0e979e5": "20c3ec5da24bdf71ab046c747acb0e99",
".git/objects/9e/20ca697a42e430c4f4c6f2e92f4a73a4f5d676": "7f6ffe5d7fbf53132e2dbbc55a278962",
".git/objects/9f/9ad25bd803d977e9c96bccd5709c646f7ae834": "967024f46fae2790d14bac2198c0cb75",
".git/objects/ab/893b80f230e80648250f7d8b36f48b68f6b355": "bb3f0d305d8c3a3c7fd400275fd1459f",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b0/d473d51edcf38fd016901633995ac395cc870a": "e3c575d56c1538ac91a08bca141f47c2",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b3/9dd4a82b1d6d5a169772086673043dd6baa1d1": "617f0f70628adb5df7a0ff0aefbfa882",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/84e63f86215edb4b1e74c6c1c87076b3221943": "19196c3dcbcd62a52dfad18e5f50ead5",
".git/objects/bd/9264139e26de46f796e0016659c5dfa12520a7": "752dbe41e428d029e6c8aa7bc45664c0",
".git/objects/be/96fcce19c0e3a5379910596deb67b45a7ea9d6": "394b3f1d78c19126f23347a4c1a48276",
".git/objects/c2/2a48409ee67391222dd6f9cee7aa26f81b0780": "ccfabd2c8eb7a9db4c5ca86ed230719c",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c8/c1536886bac1d4b705a1bc1b27a4e91d1b08aa": "9cee7f6eb4bc406caef08cdc6485b7a5",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cc/f99f30a59843b6697f423f4552e364ddf650c4": "27c56f653209067e138284b356c804b1",
".git/objects/d2/7ea3eb448faa888d2dadc52f7987a655134496": "26d6446e53e7babe1130e2ac04df9cc2",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/c9affdebab186c57c7a0357aab64ebbdd0b73c": "4149e0ce9bba0ad8aae9317265f99d1b",
".git/objects/e4/62a2fae9dc099f377e173623218a3e5028eace": "edaf7466c617d7aca2c586b40b0ea892",
".git/objects/e5/5e86be86f414398cda63bf71773291c5f9c7e2": "57800183d3c675c16040d1e941982c08",
".git/objects/e6/f2e0597fc29b2756322fdcc567d95b5369955d": "d0070e2a754e0c14e49d3484171ed731",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/a90d5dee2908be5d57961e30216dbf5dbbfcc2": "14e7b4a3d614d43e517934083b587af9",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/ORIG_HEAD": "1643af409f02ded4e4d4a74b9f8a812f",
".git/refs/heads/main": "1643af409f02ded4e4d4a74b9f8a812f",
".git/refs/remotes/origin/main": "1643af409f02ded4e4d4a74b9f8a812f",
".git/refs/remotes/origin/master": "c5f185dcd81b96ba146798f4018657f9",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "f26b118f73b7e1f961eed59ab19503f4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "94edc73c5b45e06e8f11c7de29e81844",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "86d2549542eb1c1b8f9ed180b1ec1ca5",
"/": "86d2549542eb1c1b8f9ed180b1ec1ca5",
"main.dart.js": "e9782e0eab8e92aa035bbe2018d8fd86",
"manifest.json": "5f90cb8026b848dc5c25dd391268ba94",
"version.json": "3f69b55d34fb46c0310fc284bb8de349"};
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
