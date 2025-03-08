import logo from './images/smerlogo.png'
import logowhite from './images/smerlogo(white).png'
import { FaRegCircleUser,FaChevronDown  } from "react-icons/fa6";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

//Nav Items
export const navItems={
    firstSet:"Home",
    secondSet:[
        {
            id:1,
            navItem:"the journal",
            routeName:"journal"
        },
        {
            id:2,
            navItem:"author guidelines",
            routeName:"author-guidelines"
        },
        {
            id:3,
            navItem:"submission & review process",
            routeName:"submission-and-review-process"
        },
        {
            id:4,
            navItem:"current & past issues",
            routeName:"current-and-past-issues"
        },
        {
            id:5,
            navItem:"research ethics and policies",
            routeName:"research-ethics-and-policies"
        },
        {
            id:6,
            navItem:"indexing and abstracting",
            routeName:"indexing-and-abstracting"
        },
        {
            id:7,
            navItem:"reviewer guidelines",
            routeName:"reviewer-guidelines"
        }
    ],
    thirdSet:[
        {
            id:1,
            navItem:"Editorial Board",
            routeName:"editorial-board"
        },
        {
            id:2,
            navItem:"Call For Papers",
            routeName:"call-for-papers"
        },
        {
            id:3,
            navItem:"Contact Us",
            routeName:"contact-us"
        },
        {
            id:4,
            navItem:"FAQ's",
            routeName:"faqs"
        }
    ]
}

export const aboutJournal={
    firstSection:[
        {
            id:1,
            subheading:"Aims",
            description:"JMELL aims to promote high-quality research in modern English language and literature by fostering innovative ideas, theoretical advancements, and methodological diversity. The journal seeks to facilitate intellectual discussions that enhance understanding of contemporary linguistic and literary developments. By providing a global platform for scholarly exchange, JMELL encourages original research that contributes to the evolving discourse in English."
        },
        {
            id:2,
            subheading:"Scope",
            description:"The journal welcomes contributions exploring various aspects of language, literature, and communication, integrating interdisciplinary insights from sociolinguistics, discourse analysis, digital humanities, and applied linguistics. It addresses emerging linguistic trends, literary interpretations, and contemporary communication practices, ensuring a comprehensive exploration of English studies. JMELL also supports research that examines the cultural, historical, and technological influences shaping modern English language and literature."
        },
        {
            id:3,
            subheading:"Research Focus & Themes",
            description:"The journal covers a broad spectrum of research areas, reflecting the dynamic nature of modern English studies. The key themes include contemporary linguistic innovations, literary studies across different genres and historical periods, and the impact of digital and multimodal communication on language and literature. JMELL also explores sociolinguistics, discourse analysis, language pedagogy, cross-cultural communication, translation studies, and critical theory. By embracing an interdisciplinary approach, the journal encourages research that bridges traditional and emerging perspectives in English studies."
        },
        {
            id:4,
            subheading:"Journal Objectives",
            description:"The primary objective of JMELL is to advance research in modern English language and literature while adopting scholarly collaboration and discourse. The journal seeks to promote theoretical and methodological diversity, encouraging innovative approaches to linguistic and literary analysis. By providing a platform for both emerging and established scholars, JMELL supports academic excellence and intellectual growth. Furthermore, the journal is committed to maintaining high editorial and ethical standards through a rigorous peer-review process, ensuring that published works contribute meaningfully to the field."
        },
        {
            id:5,
            subheading:"Target Audience",
            description:"JMELL serves a diverse audience of academics, researchers, educators, and professionals engaged in English language, literature, and communication studies. The journal is particularly relevant to university faculty, graduate students, and language practitioners seeking insights into contemporary linguistic and literary research. Additionally, professionals in publishing, translation, and discourse analysis, as well as policymakers and institutions involved in language education and literary studies, will find JMELL a valuable resource for scholarly and practical applications."
        },
        {
            id:6,
            subheading:"Publication Frequency",
            description:"Twice a year (June and December)."
        },
        
    
    ],
    lastSection:{
        subheading:"Open Access Policy",
        descriptionArray:[
            {
                id:1,
                description:"Journal of Modern English Language and Literature (JMELL) is committed to the principles of open access, ensuring that all published content is freely available to the global research community without financial, legal, or technical barriers. By adopting an open-access model, JMELL promotes the widespread dissemination of knowledge, fostering academic collaboration and innovation in modern English studies."
            } ,
            {
                id:2,
                description:"JMELL publishes under a Creative Commons license (CC BY or equivalent), allowing researchers, educators, and practitioners to access, share, and build upon published work while ensuring proper attribution to the original authors. This policy aligns with our mission to support unrestricted access to scholarly research, enabling a broader impact within and beyond academia."
            } ,
            {
                id:3,
                description:"Authors retain copyright over their work and grant JMELL the right to publish and distribute their research. The journal does not charge any publication fees, ensuring that all scholars, regardless of financial resources, can contribute to and benefit from high-quality research."
            } ,
            {
                id:4,
                description:"By maintaining an open-access framework, JMELL upholds transparency, ethical publishing standards, and academic integrity while contributing to the advancement of modern English language and literature studies."
            }
        ]
    }
}


export {logo,logowhite,FaRegCircleUser,FaChevronDown,HiOutlineMenu,IoClose}