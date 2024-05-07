// dsp
const interestGroup = {
  name: 'ig1',
  owner: "https://ft.adsrvr.org",
  enableBiddingSignalsPrioritization: true,
  prioritySignalsOverrides: {
      signal1: 1
  }, 
  biddingLogicURL: "https://ft.adsrvr.org/statics/buyer.js",
  trustedBiddingSignalsURL:
    "https://ft.adsrvr.org/auction/getValues",
  trustedBiddingSignalsKeys: ["adgroup1"],
  ads: [
    {
      renderURL: "https://ft.adsrvr.org/creatives/ads.html?c=vskjez3/foh1kju/ze0ydlxa_main_0_600x300.jpg&w=${AD_WIDTH}&h=${AD_HEIGHT}",
      sizeGroup: "group1"
    },
    {
      renderURL: "https://ft.adsrvr.org/creatives/ads.html?c=vskjez3/foh1kju/5bc560gp_300x250.jpg&w=${AD_WIDTH}&h=${AD_HEIGHT}",
      sizeGroup: "group2"
    }
  ],
  adSizes:{
    size1:{width:600,height:300},
    size2:{width:300,height:250}
  },
  sizeGroups:{
    group1:["size1"],
    group2:["size2"]
  }
};

console.log(interestGroup);

document.addEventListener("DOMContentLoaded", async (e) => {
  const kSecsPerDay = 3600 * 24 * 30;
  if (navigator.joinAdInterestGroup) {
    await navigator.joinAdInterestGroup(interestGroup, kSecsPerDay)
    console.log("called joinAdInterestGroup");
  } else {
    console.log("joinAdInterestGroup doesn't exist. Please enable the flags at chrome://flags/#privacy-sandbox-ads-apis");
  }
});
