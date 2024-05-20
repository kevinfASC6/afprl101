import React from 'react';
import NavBar from './NavBar.js'; 
import Dropdown from './Dropdown.js';
import DropTable from './DropTable.js'; 
import '.././App.css'; 

const Home = () => {
    return (
        <div>
            <NavBar />
            <div className="image-container">
                <span className="yellow-bar-right"></span>
                <img id='home-img' alt='africana studies' src='https://www.lynchburg.edu/wp-content/uploads/Africana-Studies-400.jpg' className="nav-image" />
                <span className="yellow-bar"></span>
            </div>  
            <DropTable title="Early African History" > 
            <h4>Origin of Man</h4>
               <p>In 1871, Charles Darwin in <i>Descent of Man</i> noted that Africa was probably the birthplace of mankind, but it was brushed off by Europeans.
               It was not until 1961 when British Anthropologists Louis and Mary Leakey found evidence that confirmed that humans evolved from primates. To this
               day, there are still people who argue that hominids originated in other parts of the world, but there is a general consensus amongst scientists
               that Africa is the mother of all humans. By at least 60000 years ago, humans had begun to migrate out of East Africa to other parts of the world,
               such as parts of the Middle East, Asia, and Australia. It took around 40000 years for the first humans to appear in Europe.
               They used tools such as spear and harpoon points for hunting large animals such as large fish and animals like wild ox and hippopotamus.</p>
               <h4>Egyptian Civilization</h4>
               <p>While humans began to migrate out of the Africa, by 6000 BCE along the banks of the Nile River, civilization began to develop as people harvested
               millet and sorghum and settled along the river. As a result of this, Egypt became one of the most densely populated regions of the ancient world.
               Over the next 4000 years Egypt began to develop into a thriving civilization despite their sparsely populated and harsh deserts, with irrigation
               being developed along the Nile River and rulers known as Pharaohs who ruled their kingdoms from centralized governments. It dominated lands bordering
               the Mediterranean Sea for 3000 years, from 3100 to 332 CE. Egypt stands as the longest lasting civilization in history, with around 30 dynasties
               during this time period.</p>
               <h4>Kingdoms of West and Central Africa</h4>
               <p>Ibn Hawkal's <i> Opus Geographicum </i>, which was written more than a millennium ago shed light on the gold trade and the control of cross-Sahara
               traffic that was required for it. As a result of it, it unified people of different cultures and also lead to the establishment of empires and centralized
               kingdoms ruled by local rulers. Iron production first happened in Nok, in present day Nigeria in 450 BCE, long before the trade was mastered in Europe.
               As a result of iron and new tools that increased agricultural production, this allowed for specialization of labor, with workers becoming experts in trades
               such as toolmaking and leatherworking. Different societies evolved at different rates, with villages and towns in regions with fertile soil and abundant
               minerals growing rapidly.</p>
               <h4>The Kingdom of Ghana</h4>
               <p>The Kingdom of Ghana developed between the fifth and eleventh centuries, after the collapse of the Roman Empire. The success of Ghana was fueled
               by the gold trade with kings doing their best to keep values of gold high. This also made Ghana's capital city of Kumbi-Saleh the busiest
               and wealthiest marketplace in West Africa.</p>
               <h4>The Kingdom of Mali</h4>
               <p>As a result of instability within Ghana, an emboldened overlord of Mali rebelled against Ghana, resulting in the fall of the kingdom and the
               rise of the Mali Empire. It covered more than three times the landmass Ghana did at its peak. Mansa Musa, a devout muslim and the king of the
               Mali Empire, completed his pilgrimage in 1324 and through his disbursement of gold created a legendary image of Mali and promoted the treasures of
               West Africa.</p>
               <h4>The Kingdom of Songhai</h4>
               <p>After the death of Mansa Musa in 1332, Mali's dominance slowly declined, with the people of Songhai breaking away in 1435 to eventually
               conqueror new territories that grew out of the Mali Empire. Tensions between Muslim rulers and tribes, economic interests and other factors
               lead to conflicts within Songhai, resulting in it being the last great trading empire of West Africa. </p>
               <h5>Source: "African American Lives: The Struggle for Freedom, Volume I" Chapter 1 by Clayborne Carson, Emma J Laspsansky-Werner, and Gary B.N</h5>

             </DropTable> 
            <DropTable title="Transatlantic Slave Trade and Slavery">
            <h4>Transatlantic Slave Trade </h4>
               <p>The Transatlantic Slave Trade took place between 1501 and 1867, with nearly 13 million Africans being kidnapped and trafficked across the
               Atlantic Ocean into the Americas. According to EJI, it was one of the "most violent, traumatizing, and horrific eras in world history. Nearly
               two million people died during the barbaric Middle Passage across the ocean." They were separated by gender and forced to tightly pack together into
               cells with extreme conditions. Men were forced to cram together, and lay in urine, feces, blood, and mucus with no fresh air. Alexander Falconbridge,
               a white surgeon testified that captives “had not so much room as a man in his coffin, neither in length or breadth, and it was impossible for them
               to turn or shift with any degree or ease." In addition to this, there was also sexual violence towards women and severe punishments.</p>  
               <h4>Slavery in the Americas</h4>
               <p>Of the 11 million who made it across the Atlantic, around 90% of them arrived in the Caribbean and South America, with around 80% of Africans being
               forced to work in sugar plantations with dangerous conditions. Work on plantations usually began at 5am in the morning, with the enslaved working until dawn in the Caribbean.
               In the months leading up to the Haitian revolution in 1794, white Europeans made up just 5% of the total population. There was an equal number of free people of color as Europeans,
               and their control in South America was further challenged by the growing number of enslaved people who demanded freedom in exchange for fighting the indigenous people who resisted against
               European colonizers. In North America, however there was a white majority that resulted in British colonists rarely having to make legal or political concessions to the enslaved.</p> 
               <h4>End of Slavery</h4>
               <p> The three main ways that African slaves resisted their conditions were “Armed Revolt and Autonomous Space, Everyday- Every Way Resistance, and Facing the Enemy.” Gomez explained that “it did not take long for Africans to revolt” and that it happened all over the world, from Hispanoia to “Puerto Rico in 1527; Santa Martha, Colombia in 1529; the Panamanian town of Acla in 1530; Panama City in 1531; Mexico City in 1537; the Venezuelan towns of Coro in 1532 and Buría in 1555; and San Pedro, Honduras in 1548,” in which Africans all revolted against their inhumane conditions. Others resisted in other ways, such as starting their own families and passing on their knowledge and wisdom to the next generation, as well as the sad option of infanticide. Through directly facing the enemy and many revolts, it resulted in the first American maroons and eventually contributed to the abolishment of slavery
                   Slavery first was abolished in Haiti in 1791.It was followed by "Chile, the countries of Central America, and Mexico
                   in 1823, 1824, and 1829, respectively, but not until 1852 in Colombia. Ecuador followed suit that year, then Argentina and Uruguay (1853), Peru and Venezuela (1854),
                    Bolivia (1861), and Paraguay (1869)." (Gomez)</p>
               <h4>Post Slavery</h4>
               <p>After the end of the Civil War and the end of slavery in 1865, it was followed by a movement of people throughout the African Diaspora. In the Caribbean,
               many people begin moving out from places like Barbados to places like British Guyana, Trinidad and Tobago for better opportunities
                resulting in concern of a labor shortage for the sugar cane industry of the region. As a result of this exodus, the government resorted to recruiting workers from two
                 main sources outside the Caribbean, from Asia and West Africa. Similarly in America, there was also a movement known as the first Great Migration
                 that took place between 1916 and 1930 where many African Americans migrated to the North to take on job opportunities that have been created as
                 result of the first and second World War. There were also a lot of violence during this time period, with a example of this being Red Summer of 1919, where conflicts
                 over employment between African Americans and Whites often resulted violence, with one of the most serious cases leaving more than 40 people
                 dead, hundreds injured, and more than 1000 (mostly African Americans) homeless.
</p>

               <h5>Source: "The Transatlantic Slave Trade" by the Equal Justice Initiative (EJI) and "Reversing Sail" by Michael Gomez</h5>

             </DropTable> 
             <DropTable title="The Colonization of Africa">
             <h4>European Colonialism</h4>
               <p>European countries such as Britain, France, Germany, Belgium, Italy, Portugal, and Spain were competing with each other for power with themselves, and
                   one way for them to demonstrate their national preeminence was through colonization throughout the world. In addition to this, economic and social elements
                   also lead to colonization. As a result of the Industrial Revolution, there was a high demand for raw goods which als resulted in major social problems such
                   as unemployment, poverty, homelessness, and social displacement, all of which is results of capitalism. As a result of social problems, one resolution was
                   create settler colonies by exporting the "surplus population". As a result of these economic, political, and social factors, this lead to infighting amongst
                   European colonizers. As a result of this, the Berlin Conference was held between Novemeber 1884 to February 1885. This resulted in a treaty between European
                   powers known as the Berlin Act, with some of its major articles being the following: </p>
               <ul>
                   <li>The Principle of Notification (Notifying) other powers of a territorial annexation</li>
                   <li>The Principle of Effective Occupation to validate the annexations </li>
                   <li>Freedom of Trade in the Congo Basin</li>
                   <li>Freedom of Navigation on the Niger and Congo Rivers</li>
                   <li>Freedom of Trade to all nations</li>
                   <li>Suppression of the Slave Trade by land and sea</li>
               </ul> 
               <p>This treaty was drawn up without any African participation, and resulted in the partition and colonization of Africa by different European nations.</p>
               <h4>Indirect Rule and Assimilation</h4>
               <p>The British ruled their colonies indirectly. In Nigeria, the Gold Coast, Kenya, Uganda, and Tanganyika, Britain organized their colonies at the central,
                   provincial, or regional levels, with a governor or governor-general who governed with an appointed executive council and a legislative council. British
                   colonies were often divided into provinces that were headed by provincial commissioners or residents.</p>
               <p>The French, on the other hand, established a highly centralized administrative system that was influenced by their tradition of extreme administrative
                   centralism. Their ideology claimed that they were on a mission to civilize and lift the natives out to the new status of French Africans. They practiced
                   assimilation, where through acculturation and education and meeting formal conditions to become French Africans.</p>
               <h4>Resistance to Colonialism in Africa</h4>
               <p>In response to the Berlin Conference and its subsequent effects, it resulted in African political and diplomatic responses which got no where, eventually
                   resulting in military resistance. Agents sent out by European nations to African societies, states, kingdoms, and empires were misinterpreted, as the
                   treaty meant that the Africans had signed away their sovereignties to European powers while African nations believed that they were merely diplomatic and
                   commercial friendship treaties. As a result of this misunderstanding, it eventually resulted in military resistance. It mainly took two forms, either as
                   guerilla warfare or direct military engagement. In small scale societies, guerrilla warfare was the dominant type of resistance because of their size and the a
                   absence of professional armies. Direct military engagement was used by centralized states like kingdoms and empires, which often had standing armies.
                   One example of this is Ethiopia, being the only African nation to keep its sovereignty from European powers under the leadership of emperor Menelik II. </p> 
               <h5>Source: "The Colonization of Africa" by Ehiedu E. G. Iweriebor </h5>

             </DropTable>  
             <DropTable title="Pan Africanism">
             <p>In "Pan-Africanism," Minkah Makalani notes that "Pan-Africanism represents the complexities of black political and intellectual thought over two hundred years."
               The movement includes a focus on politics, ideology, organizations, or culture. At the simplest level, it is the belief that Africans and people of African descent
               not only share a common history, but also share a common destiny. This belief has lead to interconnectedness within the black community, which has taken many forms,
               with a huge impact on political thought.</p> 
               <h4>African Religious Identity, Pan-African Conferences, and the Last Pac</h4>
               <p>Throughout the Americas, an African identity was apparent in the religious enslaved, who often practiced religions that blended African deities and belief systems
               with that of Christianity and Catholicism. This gave rise to the Santería in Cuba, Vodun in Haiti and the Dominican Republic, and Candomblé in Brazil. While the enslaved
               in the Americas did not develop their own religions, their religious practices helped foster a sense of collective identity.</p>
               <p>The first pan-African conference was the Chicago Conference in Africa, which took place between August 14, 183. It lasted a week and was attended by Henry McNeal
               Turner, Alexander Crummell, Yakub Pasha, and African Methodist Episcopal Church bishop Alexander Walters. Topics that were discussed during the conference included
               “The African in America,” “Liberia as a Factor in the Progress of the Negro Race,” and “What Do American Negroes Owe to Their Kin Beyond the Sea.” A few years after
               the conference in 1897, the African Association (AA) was founded by Henry Sylvester Williams with the goal of encouraging unity and facilitate friendly relationships
               between Africans and to promote and protect the interests of all subjects claiming African descent. The AA organized a Pan-African conference from July 23 to July 25,
               1900 in London's Westminster Town Hall. This conference drew delegates from all over the world, with  thirty-two delegates from Africa, the United States, the Caribbean,
               and parts of Europe. This conference resulted in the creation of the Pan-African Association (PAA) which replaced the African Association. The PAA continued the work of AA,
               with the goal of "securing civil and political rights for African peoples; promoting friendly relations between races; encouraging African peoples in education, industry,
               and business; lobbying governments on behalf of African peoples" (Makalani)</p>
               <p>The last Pan-African Congress was convened by Tanzanian President Julius Nyerere between June 17-19, 1974 in Dar es Salaam. Know as the Six Pac, this was the first
               congress that was held in Africa. Nyerere considered this meeting, coming after national liberation had spread throughout Africa and the Caribbean, as an opportunity to
               discuss the “means, and further, the progress, of opposition to racialism, colonialism, oppression and exploitation everywhere,” and placing these in “the context of a
               worldwide movement for human equality and national self-determination.” (Makalani)</p>

             <h5>Source: "Pan-Africanism" by Minkah Makalani</h5>

             </DropTable>
             <DropTable title="Becoming Abolitionists" > 
                <p>In "Becoming Abolitionists: Police, Protests, and the Pursuit of Freedom" by Derecka Purnell, Purnell explains the problems that exists within today's social justice system
                and why change is needed. Below are summaries of two chapters in her book.</p>
                <h4>What Justice?</h4> 
                <p>In chapter one "What Justice," Purnell explains her early days growing up in South St. Louis. Her Father was killed in a accident 1991, and she was raised by her mother who 
                    gave her two career options- to either become a doctor or a lawyer. As a kid she excelled in school, and she notes that "Black people in St. Louis have a long history of 
                    using education as a site of resistance" (Purnell). She first recognized the problems with the social justice system in the country after 9/11, in which she notice that there 
                    were school police with scanners inside her school everyday, and noted that schools that were "—majority Black and economically divested—had the highest percentages of school 
                    cops, and it remains so" to this day (Purnell). Her first experience with reading and writing news was JROTC, where she first read about news that captured national headlines, 
                    such as Hurricane Katrina and the police shooting of Sean Bell. Her experiences with injustice all over during her college days shaped her perspective and views on both policies 
                    regarding police and racial injustices. </p> 
                <h4>We only want the Earth</h4>
                <p>In chapter eight "We only want the Earth," Purnell explains that the climate, whether it is economic, racial, or environmental has resulted in movements in American history, 
                and expressed how climate change has impacted Black communitities. Purnell explained how as a result of poverty, many people in her neighborhood would find themselves cooling off outside and 
                for privacy as well. She also mentions how incarcerated people are facing with a analogy to the aftermath of Hurricane Katrina, in which new Orleans built make shift cells to "rebuild" New Orleans. 
                She explains that this was not unique as in the aftermath of disasters African Americans tend to suffer the most, and wraps up the chapter by explaining that the "abolition of the prison industrial complex is the minimum for healthy
lives that we all deserve to live. We only want the Earth." (Purnell) </p>
                <h5>Source: "Becoming Abolitionists: Police, Protests, and the pursuit of freedom" by Derecka Purnell</h5>
             </DropTable>
        </div>
    );
}

export default Home;
