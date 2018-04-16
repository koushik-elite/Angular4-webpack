export class omnitureConfig { 

  constructor() { }

  getCustomOmnitureForEvent(action: string, message: string) {
    let customOmniture = {
        "mailinglist-submit" : {
            "omniVars" : {
                "events" : "event63",
                "linkTrackEvents" : "event63",
            },
            "message" : message + ":Signup Success"
        },
        "mailinglist2-submit" : {
            "omniVars" : {
                "events" : "event63",
                "linkTrackEvents" : "event63",
            },
            "message" : message + ":Save Success"
        }
    }

    return customOmniture[action];
    
  }
  
  getOmniturePageConfig(path: string) {
  
	var regexPattern = {
        video: /\/video/,
        photo: /\/photo/,
        blog: /\/news/,
        album: /\/music/,
        videoDetail: /\/video\//,
        blogDetail: /\/news\//,
        photoDetail: /\/photo\//,
        albumDetail: /\/album\//,
        videoCategory: /\/video\/category/,
        photoCategory: /\/photo\/category/,
        blogCategory: /\/news\/category/,
        mailinglist: /\/mailing-list/,
        tour: /\/tour/,
        home: /\//,
    };

    var pageConfig = {
        artistName : "Sandbox Test For ME",
        platform: "Drupal 8:Starter Site",
        reportSuites : "wmggardensdevdtm",
        label:"WMI",
        sublabel:"UK"
    };
	
	var pathPattern, title = "";
	switch (true) {        
        case regexPattern.tour.test(path): pathPattern = "/tour"; break;
        case regexPattern.videoCategory.test(path): pathPattern = "/videoCategory"; title = path.split("/").pop().split("?").shift(); break;
        case regexPattern.videoDetail.test(path): pathPattern = "/videoDetail"; title = path.split("/").pop(); break;
        case regexPattern.video.test(path): pathPattern = "/video"; break;
        case regexPattern.photoCategory.test(path): pathPattern = "/photoCategory"; title = path.split("/").pop().split("?").shift(); break;
        case regexPattern.photoDetail.test(path): pathPattern = "/photoDetail"; title = path.split("/").pop(); break;
        case regexPattern.photo.test(path): pathPattern = "/photo"; break;
        case regexPattern.blogCategory.test(path): pathPattern = "/blogCategory"; title = path.split("/").pop().split("?").shift(); break;
        case regexPattern.blogDetail.test(path): pathPattern = "/blogDetail"; title = path.split("/").pop(); break;
        case regexPattern.blog.test(path): pathPattern = "/blog"; break;
        case regexPattern.albumDetail.test(path): pathPattern = "/albumDetail"; break;
        case regexPattern.album.test(path): pathPattern = "/album"; break;
        case regexPattern.album.test(path): pathPattern = "/album"; break;
        case regexPattern.albumDetail.test(path): pathPattern = "/albumDetail"; break;
        case regexPattern.mailinglist.test(path): pathPattern = "/mailing-list"; break;
        case regexPattern.home.test(path): pathPattern = "/"; break;
    }
	
	var page = {
        "/": {
            pageInfo: {
                pageName: pageConfig.artistName+":Homepage",
                server: pageConfig.artistName+":site"
            },
            category: {
                primaryCategory: pageConfig.artistName+":Home",
                pageType: "Homepage"
            }
        },
        "/video": {
            pageInfo: {
                pageName: pageConfig.artistName+":Videos",
            },
            category: {
                primaryCategory: pageConfig.artistName+":Videos",
                pageType: "videos:landing"
            }
        },
        "/album": {
            pageInfo: {
                pageName: pageConfig.artistName+":Music",
            },
            category: {
                primaryCategory: pageConfig.artistName+":Music",
                pageType: "music:landing"
            }
        },
        "/videoDetail": {
            pageInfo: {
                pageName: pageConfig.artistName+":Videos:" + title,
            },
            category: {
                primaryCategory: pageConfig.artistName+":Videos",
                pageType: "videos:details"
            }
        },
        "/albumDetail": {
            pageInfo: {
                pageName: pageConfig.artistName+":Videos:" + title,
            },
            category: {
                primaryCategory: pageConfig.artistName+":Videos",
                pageType: "videos:details"
            }
        },
        "/videoCategory": {
            pageInfo: {
                pageName: pageConfig.artistName+":Music:" + title
            },
            category: {
                primaryCategory: pageConfig.artistName+":Music",
                pageType: "music:album details"
            }
        },
        "/photo": {
            pageInfo: {
                pageName: pageConfig.artistName+":Photos",
            },
            category: {
                primaryCategory: pageConfig.artistName+":Photos",
                pageType: "photos:landing"
            }
        },
        "/photoDetail": {
            pageInfo: {
                pageName: pageConfig.artistName+":Photos:" + title
            },
            category: {
                primaryCategory: pageConfig.artistName+":Photos",
                pageType: "photos:details"
            }
        },
        "/photoCategory": {
            pageInfo: {
                pageName: pageConfig.artistName+":Photos:" + title
            },
            category: {
                primaryCategory: pageConfig.artistName+":Photos",
                pageType: "photos:category"
            }
        },
        "/music": {
            pageInfo: {
                pageName: pageConfig.artistName+":Music",
            },
            category: {
                primaryCategory: pageConfig.artistName+":Music",
                pageType: "music:landing"
            }
        },
        "/tour": {
            pageInfo: {
                pageName: pageConfig.artistName+":Upcoming Tours",
            },
            category: {
                primaryCategory: pageConfig.artistName+":Tours",
                pageType: "tour:upcoming"
            }
        },
        "/blog": {
            pageInfo: {
                pageName: pageConfig.artistName+":Blog",
            },
            category: {
                primaryCategory: pageConfig.artistName+":Blog",
                pageType: "blog:landing"
            }
        },
        "/blogDetail": {
            pageInfo: {
                pageName: pageConfig.artistName+":blog:" + title
            },
            category: {
                primaryCategory: pageConfig.artistName+":blog",
                pageType: "blog:details"
            }
        },
        "/blogCategory": {
            pageInfo: {
                pageName: pageConfig.artistName+":blog:" + title
            },
            category: {
                primaryCategory: pageConfig.artistName+":blog",
                pageType: "blog:category"
            }
        },
        "/mailing-list": {
            pageInfo: {
                pageName: pageConfig.artistName+":Mailing List Sign-up:" + title
            },
            category: {
                primaryCategory: pageConfig.artistName+":Mailing List Sign-up",
                pageType: "standalone:Mailing List Sign-up"
            }
        },
    }

    var data = page[pathPattern];
    data.pageConfig = pageConfig;
    return data;
	
  }  
}
