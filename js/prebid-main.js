//const gptSlot = "/15686632/Demo_2019_881903_Home_Slot1_Top_LERC";
const gptSlot = "/15686632/Demo_2019_881903_Search_Slot1_SuperBanner";
const sizes = [
  [728, 90],
  [320, 50],
  [970, 90],
  [300, 50],
  [320, 100],
  [468, 60],
  [1, 1],
];
const floors = {
  floorProvider: "legacy",
  floorsSchemaVersion: 2,
  currency: "USD",
  modelGroups: [
    {
      currency: "USD",
      schema: {
        fields: ["domain", "adUnitCode"],
        delimiter: "|",
      },
      values: {
        "www.isavea2z.com|Video_Collapse_Autoplay_SoundOff": 0.00001,
        "www.isavea2z.com|Video_Individual_Autoplay_SOff": 0.00001,
        "www.isavea2z.com|Video_Coll_SOff_Smartphone": 0.00001,
        "www.isavea2z.com|Video_In-Post_ClicktoPlay_SoundOn": 0.00001,
        "www.isavea2z.com|AdThrive_Footer_1_desktop": 0.75844,
      },
      skipRate: 0,
      modelWeight: 100,
      modelVersion: "legacy",
    },
  ],
};
const s2sConfg = [
  {
    accountId: "9262",
    enabled: true,
    secure: 1,
    bidders: [
      "33across",
      "conversant",
      "grid",
      "improve_ss",
      "pubm_ss",
      "under_ss",
      "unruly",
      "yieldmo",
      "adform",
      "opnx_ss",
      "rubi_ss",
      "tripl_ss",
      "yah_ss",
    ],
    extPrebid: {
      aliases: {
        improve_ss: "improvedigital",
        rubi_ss: "rubicon",
      },
      eidPermissions: [
        {
          source: "bidswitch.net",
          bidders: [
            "conversant",
            "grid",
            "improve_ss",
            "pubm_ss",
            "under_ss",
            "unruly",
            "yieldmo",
            "adform",
            "opnx_ss",
            "rubi_ss",
            "tripl_ss",
            "yah_ss",
          ],
        },
      ],
    },
    defaultTtl: 300,
    timeout: 1250,
    refreshTimeout: 1500,
    adapter: "prebidServer",
    coopSync: false,
    userSyncLimit: 25,
    endpoint: {
      p1Consent: "https://prebid-server.rubiconproject.com/openrtb2/auction",
      noP1Consent: "https://prebid-server.rubiconproject.com/openrtb2/auction",
    },
    syncEndpoint: {
      p1Consent: "https://prebid-server.rubiconproject.com/cookie_sync",
      noP1Consent: "https://prebid-server.rubiconproject.com/cookie_sync",
    },
  },
];
const priceGranularity = {
  buckets: [
    {
      precision: 2, //default is 2 if omitted - means 2.1234 rounded to 2 decimal places = 2.12
      min: 0,
      max: 0.1,
      increment: 0.01,
    },
    {
      precision: 2,
      min: 0.1,
      max: 5,
      increment: 0.05,
    },
    {
      precision: 2,
      max: 20,
      increment: 0.1,
    },
    {
      precision: 2,
      max: 100,
      increment: 0.5,
    },
  ],
};

const PREBID_TIMEOUT = 5000;
const adUnits = [
  {
    code: "div-1",
    mediaTypes: {
      banner: {
        sizes: sizes,
      },
    },
    bids: [
      {
        bidder: "kargo",
        params: {
          placementId: "_fPM3feDxUE",
        },
      },
      {
        bidder: "appnexus",
        params: {
          keywords: {
            sens: ["alc", "gamv"],
            bucket: ["unsupported"],
            Chrome: "true",
            Mobile: "false",
            verticals: ["Food", "Crafts", "Personal Finance"],
            mcmp: ["BA_KRGKW24", "BA_WSKW20", "HOME"],
            site_code: ["AFOI_2020", "MRLOI_22", "RMOI_24", "TGNAF_21"],
            pmp_elig: "true",
            hvp: 80,
          },
          allowSmallerSizes: true,
          placementId: 13036401,
          position: "above",
        },
      },
      {
        bidder: "ix",
        params: {
          id: "12_1",
          siteId: "185770",
          size: [728, 90],
        },
      },
      {
        bidder: "ix",
        params: {
          id: "12_2",
          siteId: "185770",
          size: [970, 90],
        },
      },
      {
        bidder: "ix",
        params: {
          id: "12_3",
          siteId: "185770",
          size: [320, 50],
        },
      },
      {
        bidder: "ix",
        params: {
          id: "12_4",
          siteId: "185770",
          size: [320, 100],
        },
      },
      {
        bidder: "ix",
        params: {
          id: "12_5",
          siteId: "185770",
          size: [300, 50],
        },
      },
      {
        bidder: "yah_ss",
        params: {
          dcn: "8a9698af01888852cc626cda97350021",
          pos: "8a9691d801888852d23d6cdc9b7e0027",
        },
      },
      {
        bidder: "yah_ss",
        params: {
          dcn: "8a9698af01888852cc626cda97350021",
          pos: "8a9695b901888852d78e6cdc9fb40039",
        },
      },
      {
        bidder: "yah_ss",
        params: {
          dcn: "8a9698af01888852cc626cda97350021",
          pos: "8a9691d801888852d23d6cdc9f220029",
        },
      },
      {
        bidder: "yahoossp",
        params: {
          dcn: "8a9694d00177771bcae21c6941d30023",
          pos: "8a9694d00177771bcae21c6a7d880025",
        },
      },
      {
        bidder: "yahoossp",
        params: {
          dcn: "8a9694d00177771bcae21c6941d30023",
          pos: "8a969d580177771bc13c2046cd280081",
        },
      },
      {
        bidder: "yahoossp",
        params: {
          dcn: "8a9694d00177771bcae21c6941d30023",
          pos: "8a9694d00177771bcae2204408520056",
        },
      },
      {
        bidder: "triplelift",
        params: {
          inventoryCode: "adthrive_footer_1_hdx",
        },
      },
      {
        bidder: "tripl_ss",
        params: {
          inventoryCode: "adthrive_footer_1_hdx_pbs2s",
        },
      },
      {
        bidder: "pubmatic",
        params: {
          publisherId: "157347",
          adSlot: "Footer1@728x90",
          pmzoneid: "alc,gamv",
        },
      },
      {
        bidder: "pubm_ss",
        params: {
          publisherId: "157347",
          adSlot: "Footer1_XandrS2S@728x90",
          pmzoneid: "alc,gamv",
        },
      },
      {
        bidder: "ttd",
        params: {
          publisherId: "57f40d4863fc93c1288f3ab2",
          siteId: "57f40d4863fc93c1288f3ab2",
          placementId: "AdThrive_Footer_1",
          supplySourceId: "cafemedia",
        },
      },
      {
        bidder: "teads",
        params: {
          placementId: 121842,
          pageId: 112062,
        },
      },
      {
        bidder: "yieldmo",
        params: {
          placementId: "3457550240226157077",
        },
      },
      {
        bidder: "opnx_ss",
        params: {
          delDomain: "cafemedia-d.openx.net",
          unit: "558246006",
          customParams: {
            sens: ["alc", "gamv"],
            bucket: ["unsupported"],
          },
        },
      },
      {
        bidder: "openx",
        params: {
          delDomain: "cafemedia-d.openx.net",
          unit: "538699840",
          customParams: {
            sens: ["alc", "gamv"],
            bucket: ["unsupported"],
          },
        },
      },
      {
        bidder: "criteo",
        params: {
          networkId: 3927,
        },
      },
      {
        bidder: "grid",
        params: {
          uid: 367,
        },
      },
      {
        bidder: "unruly",
        params: {
          siteId: 249232,
        },
      },
      {
        bidder: "nativo",
        params: {},
      },
      {
        bidder: "gumgum",
        params: {
          zone: "g95nznmj",
        },
      },
      {
        bidder: "gumgum",
        params: {
          zone: "klpfgzhj",
        },
      },
      {
        bidder: "sharethrough",
        params: {
          pkey: "B1C8tQAkMN7kpCuxh1hW6CY8",
        },
      },
      {
        bidder: "conversant",
        params: {
          tag_id: "1b2dec1",
          site_id: "203587",
        },
      },
      {
        bidder: "improve_ss",
        params: {
          publisherId: 2250,
          placementId: 22983142,
        },
      },
      {
        bidder: "openx",
        params: {
          unit: "561252893",
          delDomain: "commercialradio-d.openx.net",
        },
      },
    ],
  },
];

/**code for At Job */
const Ads = (function () {
  window.googletag = window.googletag || {};
  let { googletag } = window;
  googletag.cmd = googletag.cmd || [];
  googletag.cmd.push(function () {
    googletag.pubads().disableInitialLoad();
  });

  googletag.cmd.push(function () {
    googletag
      .defineSlot(gptSlot, sizes, "div-1")
      .addService(googletag.pubads());
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
  });

  googletag.cmd.push(function () {
    googletag.display("div-1");
  });

  window.pbjs = window.pbjs || {};
  let { pbjs } = window;
  pbjs.que = pbjs.que || [];

  pbjs.que.push(function () {
    pbjs.addAdUnits(adUnits);
    pbjs.setConfig({
      debugging: {
        enabled: true,
      },
      bidderSequence: "fixed",
      priceGranularity: priceGranularity,
      targetingControls: {
        allowTargetingKeys: [
          "ADOMAIN",
          "AD_ID",
          "BIDDER",
          "CACHE_ID",
          "CACHE_HOST",
          "DEAL",
          "FORMAT",
          "PRICE_BUCKET",
          "SIZE",
          "SOURCE",
          "UUID",
          "INTERSTITIAL",
          "DSP",
          "CRID",
          "ATTR",
        ],
        allowSendAllBidsTargetingKeys: [
          "ADOMAIN",
          "AD_ID",
          "CACHE_ID",
          "CACHE_HOST",
          "DEAL",
          "FORMAT",
          "PRICE_BUCKET",
          "SIZE",
          "SOURCE",
          "UUID",
          "DSP",
          "ATTR",
        ],
      },
      s2sConfig: s2sConfg,
      //floors: floors,
      userSync: {
        iframeEnabled: true,
        filterSettings: {
          iframe: {
            bidders: ["openx"],
            filter: "include",
          },
        },
      },
    });
    pbjs.requestBids({
      bidsBackHandler: initAdserver,
    });
  });
  function initAdserver() {
    if (pbjs.initAdserverSet) return;
    pbjs.initAdserverSet = true;
    googletag.cmd.push(function () {
      pbjs.setTargetingForGPTAsync && pbjs.setTargetingForGPTAsync();
      googletag.pubads().refresh();
    });
  }
  setTimeout(function () {
    initAdserver();
  }, PREBID_TIMEOUT);

  return {};
})();
