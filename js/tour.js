AFRAME.registerComponent("tool",{
    init:function(){
        this.placesContainer=this.el
        this.createCards()
    },
    createCard:function(){
        const Thumbnailref=[
            {
                id:"taj-mahal",
                title:"Taj Mahal",
                url:"../assets/thumbnails/taj_mahal.png"
                
            },
            {
                id:"budapest",
                title:"Budapest",
                url:"../assets/thumbnails/budapest.jpg"
            },
            {
                id:"newyork",
                title:"New York",
                url:"../assets/thumbnails/new_york_city.png"
            },
            {
                id:"eiffel-tower",
                title:"Eiffel Tower",
                url:"../assets/thumbnails/eiffel_tower.jpg"
            }
        ]
        let previousxPosition=-40
        for(var item of Thumbnailref){
            const posx=previousxPosition+25
            const posy=10
            const posz=-40
            const position={x:posx,y:posy,z:posx}
            previousxPosition=posx
            const borderEl=this.createBorder(position=item.id)
            const thumbnail=this.createThumbnail(item)
            borderEl.appendChild(thumbnail)

            const TitleEl=this.createtitleEl(position,item)
            borderEl.appendChild(TitleEl)
            this.placesContainer.appendChild(borderEl)

        },
        createBorder:function(){
            const EntityEl=document.createElement("a-entity")
            EntityEl.setAttribute("id",id)
            EntityEl.setAttribute("visible",true)
            EntityEl.setAttribute("geometry",{
                primitive:"circle",
                radius:9,

            })
            EntityEl.setAttribute("material"{src:item.url})
            return EntityEl
        },
        createtitleEl:function(){
            
        }

        
    }
})