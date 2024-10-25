//const gptSlot = "/15686632/Demo_2019_881903_Home_Slot1_Top_LERC";
const gptSlot = "/15686632/2019_881903_Home_Slot1_Top_LREC_Production";
const sizes = [[300, 250]];
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
        bidder: "openx",
        params: {
          unit: "561252927",
          delDomain: "commercialradio-d.openx.net",
          customParams: {
            hb_pb_openx: 0,
          },
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
      targetingControls: {
        allowTargetingKeys: ["PRICE_BUCKET"],
      },
      priceGranularity: {
        buckets: [
          {
            precision: 2, //default is 2 if omitted - means 2.1234 rounded to 2 decimal places = 2.12
            min: 0,
            max: 4,
            increment: 0.5,
          },
        ],
      },
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
