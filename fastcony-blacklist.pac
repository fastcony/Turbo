var Label = "FastconyProxy";
var RULES = [["DOMAIN-REGEX", "(^|\\.)account\\.youku\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)acs\\.youku\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)api-ipv6\\.acfunchina\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)api-ipv6\\.app\\.acfun\\.cn$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)api-new\\.acfunchina\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)api-new\\.app\\.acfun\\.cn$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)api-top\\.iqiyi\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)api5-normal-c-lf\\.ixigua\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)api5-normal-c-lq\\.ixigua\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)api\\.app\\.acfun\\.cn$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)api\\.bilibili\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)api\\.bilibili\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)api\\.k\\.snmsohu\\.aisee\\.tv$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)api\\.mgtv\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)api\\.ott\\.tv\\.snmsohu\\.aisee\\.tv$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)api\\.pptv\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)api\\.snm0516\\.aisee\\.tv$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)api\\.tv\\.sohu\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)api\\.ximalaya\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)api\\.xsj\\.wasu\\.tv$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)apipc\\.app\\.acfun\\.cn$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)apiv4-iyes\\.youku\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)app-sc\\.miguvideo\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)app\\.bilibili\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)cache\\.video\\.iqiyi\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)cache\\.video\\.ptqy\\.gitv\\.tv$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)control-i\\.iqiyi\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)cpuid\\.iqiyi\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)cupid\\.ptqy\\.gitv\\.tv$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)display-city-sc\\.miguvideo\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)dp3\\.play\\.aiseet\\.atianqi\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)gateway\\.kugou\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)geo\\.iqiyi\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)ggx\\.cmvideo\\.cn$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)grpc\\.biliapi\\.net$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)gslbmgspvod\\.miguvideo\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)hlslive\\.video\\.ptqy\\.gitv\\.tv$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)hot\\.vrs\\.sohu\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)ip138\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)ipcheck\\.kuwo\\.cn$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)ipservice\\.suning\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)ipservice\\.suning\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)iyes\\.youku\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)live\\.video\\.ptqy\\.gitv\\.tv$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)m4\\.pptvyun\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)m\\.kugou\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)manga\\.bilibili\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)mermaid\\.ximalaya\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)mips\\.kugou\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)mobile\\.ximalaya\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)mobilehera\\.ximalaya\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)mobwsa\\.ximalaya\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)mpaywsa\\.ximalaya\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)msgacs\\.youku\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)music\\.163\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)nmobi\\.kuwo\\.cn$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)oneplay-cdn\\.api\\.pptv\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)oneplay\\.api\\.pptv\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)pb\\.bi\\.gitv\\.tv$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)pcw-api\\.iqiyi\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)pl-ali\\.youku\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)play\\.api\\.cp61\\.ott\\.cibntv\\.net$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)play\\.miguvideo\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)player\\.as\\.pptv\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)policy\\.video\\.iqiyi\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)ppgateway\\.cp61\\.ott\\.cibntv\\.net$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)pub\\.aplus\\.pptv\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)pv\\.sohu\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)rhdc-acs\\.youku\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)rpt-gdt\\.play\\.aiseet\\.atianqi\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)sdk-cache\\.video\\.ptqy\\.gitv\\.tv$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)sdk\\.data\\.cp61\\.ott\\.cibntv\\.net$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)sdk\\.ptqy\\.gitv\\.tv$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)tv\\.aiseet\\.atianqi\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)tvapi\\.ixigua\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)u\\.y\\.qq\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)v\\.miguvideo\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)v\\.youku\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)vd\\.l\\.qq\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)vv\\.play\\.aiseet\\.atianqi\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)vv\\.video\\.qq\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)way\\.pptv\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)webapi\\.miguvideo\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)www\\.acfun\\.cn$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)www\\.bilibili\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)www\\.ixigua\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)www\\.kuwo\\.cn$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)www\\.mgtv\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)www\\.ppsport\\.com$", "PROXY"],["DOMAIN-REGEX", "(^|\\.)www\\.youku\\.com$", "PROXY"],["IP-CIDR", "106.11.40.0/24", "PROXY"],["IP-CIDR", "106.11.43.0/24", "PROXY"],["IP-CIDR", "111.225.159.0/24", "PROXY"],["IP-CIDR", "114.114.114.114/32", "PROXY"],["IP-CIDR", "203.119.128.0/24", "PROXY"],["IP-CIDR", "203.119.205.0/24", "PROXY"],["IP-CIDR", "203.205.239.0/24", "PROXY"],["IP-CIDR", "203.205.255.0/24", "PROXY"],["IP-CIDR", "47.246.99.0/24", "PROXY"],["IP-CIDR", "59.82.29.0/24", "PROXY"],["IP-CIDR", "59.82.31.0/24", "PROXY"],["IP-CIDR", "59.82.60.0/24", "PROXY"],["FINAL", "DIRECT"],]
var policyGroup = {
  PROXY: "PROXY proxy.fastcony.com:1080",
  CN: "",
  GAME: "",
  DIRECT: "DIRECT;",
};
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (elt /*, from */) {
    var len = this.length >>> 0;
    var from = Number(arguments[1]) || 0;
    from = from < 0 ? Math.ceil(from) : Math.floor(from);
    if (from < 0) {
      from += len;
    }

    for (; from < len; from++) {
      if (from in this && this[from] === elt) return from;
    }
    return -1;
  };
}
if (!String.prototype.endsWith) {
  String.prototype.endsWith = function (search, this_len) {
    if (this_len === undefined || this_len > this.length) {
      this_len = this.length;
    }
    return this.substring(this_len - search.length, this_len) === search;
  };
}
function maskcidr(bitCount) {
  var mask = [];
  for (var i = 0; i < 4; i++) {
    var n = Math.min(bitCount, 8);
    mask.push(256 - Math.pow(2, 8 - n));
    bitCount -= n;
  }
  return mask.join(".");
}
function usePlicy(policy) {
  if (policyGroup[policy]) {
    return policyGroup[policy];
  }
  return "DIRECT";
}

function FindProxyForURL(url, host) {
  var hostIp = dnsResolve(host);
  for (var i = 0; i < RULES.length; i++) {
    var rule = RULES[i];
    switch (rule[0]) {
      case "DOMAIN-SUFFIX":
        if (host.endsWith("." + rule[1]) || host === rule[1]) {
          return usePlicy(rule[2]);
        }
        break;
      case "IP-CIDR":
        var ipParts = rule[1].split("/");
        var ip = ipParts[0];
        var mask = maskcidr(parseInt(ipParts[1], 10));
        if (isInNet(hostIp, ip, mask)) {
          return usePlicy(rule[2]);
        }
        break;
      case "URL-REGEX":
        try {
          var regExp = new RegExp(rule[1]);
          if (regExp.test(url)) {
            return usePlicy(rule[2]);
          }
        } catch (error) {}
        break;
      case "DOMAIN-KEYWORD":
        try {
          if (host.indexOf(rule[1]) >= 0) {
            return usePlicy(rule[2]);
          }
        } catch (error) {}
        break;
      case "DOMAIN-REGEX":
        try {
          var regExp = new RegExp(rule[1]);
          if (regExp.test(host)) {
            return usePlicy(rule[2]);
          }
        } catch (error) {}
        break;
      case "FINAL":
        return usePlicy(rule[1]);
    }
  }
  return "DIRECT";
}