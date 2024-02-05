import Footer from '../footer/Footer'
import Header from '../header/Header'
import BlogHeader from './BlogHeader'
import BlogName from './BlogName'
import BlogText from './BlogText'
import img1 from '../../assets/images/content/1943_fld.jpg'
import img2 from '../../assets/images/content/1960_fl.jpg'
import img3 from '../../assets/images/content/1965_fl.jpg'
import img4 from '../../assets/images/content/1970_fl.jpg'
import img5 from '../../assets/images/content/2009_fl.jpg'
import img6 from '../../assets/images/content/present_fl.jpg'
import BlogImg from './BlogImg'
import BlogFooter from './BlogFooter'

const Floodplain = () => {
    const text1 = "Beginning as a major Iberian political hub, Rustavi has long been a city strategically situated on the edge of the Mtkvari River. During the Soviet period, Rustavi grew into a booming city driven by Rustavi Metalurgical industry. As the city was planned, the Mtkvari was engaged as a critical resource: it could be drawn into the city for cooling the machines of the metallurgical plant and harnessed as a source of hydropower. The floodplain’s forest provided a source of clean air to be fed into the city along its grand boulevards and parks. During the socioeconomic chaos of the 1990s, the floodplain provided the means of survival for many residents - namely through deforestation by residents and their families for fuel and heat. Since this period, the floodplain has not recovered its status as an essential urban resource but is instead seen by residents as a wasteland in the middle of the city – a constant reminder of demise and a difficult past. Today, the floodplain has been reduced to a space for dumping waste, though it is occasionally used by a few residents for fishing and grazing. Despite its public status as a wasteland, some Georgians see the potential of these ecological remnants as a hub for environmental activism."
    const text2 = "1943 - The following pages trace the floodplain’s dramatic transformation throughout the 20th century to the present, documenting profound shifts in the river’s course, evolution of the city surrounding, and vegetative responses to these shifts. This documentation provides grounds for potential future interventions on the floodplain through analysis of found conditions on site which index the past and provide a base for response."
    const text3 = "Rustavi is located 27 kilometers southeast of Tbilisi stretching across the banks of the Mtkvari River. Situated geographically between two raw material bases, with convenient rail connections to the country’s existing industries, Rustavi was a promising candidate for a new industrial city. The city’s construction took place from 1941-1950 driven by the emerging industry of the Transcaucasian Metalurgical Plant (later Rustavi Metalurgical). The city was originally designed for just 30,000 people, but would quickly grow and expand with employment opportunities."
    const text4 = "1960 - Rustavi was strategically designed to take advantage of the resources the river provided. A dam was built to pump water from the river through a canal to be used for cooling in the metalurgical plant. With the city’s industrial hub located on the east bank, the first bridge was built connecting the newer residential neighborhoods of the west bank along a major axial road to the Metalurgical plant. The angle of this axis was also srategically oriented to funnel winds from the foodplain through the city, pushing industrial air pollutants away from residential areas and out of the city. These infrastructures would profoundly shift the river’s path within the floodplain."
    const text5 = "1965 - A new system for pumping water to the metalurgical plant was built to cool machines. Across from the pump station, a concrete dike was constructed to push the flow of water toward the pump station and stabilize the bank."
    const text6 = "1970 - The river’s meander continued to shift unpredictably through the forest of the alluvial fan with common seasonal flooding. As the city grew, the edge of the floodplain was further deforested for small-scale agriculture and grazing land."
    const text7 = "2009 - With the construction of a new dam on the northern edge of the floodplain, the river was locked into a stable path that would remain with controlled seasonal flooding. Between 1996 and 2000, the floodplain was rapidly deforested as Rustavi residents sought fuel alternatives in a time of desperation."
    const text8 = "Present - With new fences preventing regular grazing of the floodplain, dense ruderal vegetation has emerged along low points of the floodplain - vestiges of historical meanders of the river. Old infrastructures continue to hold the river in its current path, only allowing minor seasonal flooding."
    const text9 = "In its denuded state, the floodplain is perceived and used by residents as a wasteland and informal landfill with its piles of painted tires and construction debris. Plots of small-scale gardening, makeshift benches, cattle paths, and fishing line point to occasional use by residents. While the general consensus around the floodplain was left marred by its past, local activists see the potential of the floodplain as an ecological and social haven for the city in the future."
    return (
    <div>
      <Header transparent={false} activeItem="blog" />
      <div className="mt-16 w-full ">
        <BlogHeader link="../blog/napirze" author="MAGGIE BRAND" minRead={7} />
        <BlogName name='HISTORY OF THE RUSTAVI FLOODPLAIN' />
        <BlogText text={text1} />
        <BlogImg img={img1} />
        <BlogText text={text2} />
        <BlogText text={text3} />
        <BlogImg img={img2} />
        <BlogText text={text4} />
        <BlogImg img={img3} />
        <BlogText text={text5} />
        <BlogImg img={img4} />
        <BlogText text={text6} />
        <BlogImg img={img5} />
        <BlogText text={text7} />
        <BlogImg img={img6} />
        <BlogText text={text8} />
        <BlogText text={text9} />
        <BlogFooter nextUrl='../blog/commoning' prevUrl="../blog/napirze" />
      </div>
      <Footer activeItem="blog" />
    </div>
  )
}
export default Floodplain