const DAY_TIMELINE_INITIAL_STATE={

    defaultStyle:{
        tickSize: 20,
        width: 10,
    },
    tickTime:10,
    viewport:{
        start: "5:00",
        end: "21:00"
    },
    purposes: {
        "23efa":{

            color: "#ff00ff"

         },
        "335ab":{

            color: "#ffff00"
        }

    },
    regions:[
        {
            purpose: "23efa",
            start:"10:30",
            duration:"30"

        },
        {
            purpose: "335ab",
            start: "11:00",
            duration: "30"
        }

    ]


};
const reducer=(state=DAY_TIMELINE_INITIAL_STATE,action)=>{return state};

export {reducer};

