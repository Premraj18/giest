import React from 'react'

const CardSponser = () => {
    const Data = [
        {
            id: "1",
            title: "Detail",
            description: "Sponsor",
            imgUrl: "/icon.png"
        },
        {
            id: "2",
            title: "Detail",
            description: "Sponsor",
            imgUrl: "/icon.png"
        },
        {
            id: "6",
            title: "Detail",
            description: "Sponsor",
            imgUrl: "/icon.png"
        },
        {
            id: "7",
            title: "Detail",
            description: "Sponsor",
            imgUrl: "/icon.png"
        },
        {
            id: "8",
            title: "Detail",
            description: "Sponsor",
            imgUrl: "/icon.png"
        },
        {
            id: "9",
            title: "Detail",
            description: "Sponsor",
            imgUrl: "/icon.png"
        },
        {
            id: "10",
            title: "Detail",
            description: "Sponsor",
            imgUrl: "/icon.png"
        },
        {
            id: "11",
            title: "Detail",
            description: "Sponsor",
            imgUrl: "/icon.png"
        }
    ]

    return (
        <div className='flex flex-wrap gap-4 md:gap-10 items-center justify-center'>
            {
                Data.map((item) => (
                    <div>                        
                        <div className='border w-36 h-36 md:w-52 md:h-52 lg:w-80 bg-stone-200 rounded-xl md:rounded  flex items-center justify-center'>
                            <img src="/icon.png" alt="" className='w-20 md:w-32 hover:scale-110 transform transition' />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CardSponser
