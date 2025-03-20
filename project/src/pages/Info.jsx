import React, { useState, useEffect } from 'react';
import '../CowBreedingPortal.css';
import ScrollProgressBar from '../components/common/ScrollBar';
const CowBreedingPortal = () => {
  const [videos, setVideos] = useState([]);
  const [activeTab, setActiveTab] = useState('overview');
  
  const overviewResources = [
    { name: "Cattle International Series", url: "https://www.grass-fed-solutions.com/cattle-links.html" },
    { name: "Oklahoma State University Cattle Breeds Directory", url: "https://afs.okstate.edu/breeds/cattle" },
    { name: "National Dairy Development Board (NDDB)", url: "https://www.nddb.coop" }
  ];
  
  const governmentResources = [
    { name: "Department of Animal Husbandry and Dairying", url: "https://dahd.nic.in" },
    { name: "Rashtriya Gokul Mission Official Portal", url: "https://dahd.nic.in/schemes/programmes/rashtriya-gokul-mission" },
    { name: "e-GOPALA App Download", url: "https://play.google.com/store/apps/details?id=com.icar.egopala" }
  ];
  
  const breedResources = {
    "Gir": "https://en.wikipedia.org/wiki/Gir_cattle",
    "Sahiwal": "https://en.wikipedia.org/wiki/Sahiwal_cattle",
    "Tharparkar": "https://en.wikipedia.org/wiki/Tharparkar_cattle",
    "Red Sindhi": "https://en.wikipedia.org/wiki/Red_Sindhi",
    "Rathi": "https://en.wikipedia.org/wiki/Rathi_cattle"
  };
  
  const allBreedsResources = [
    { name: "Complete List of Cattle Breeds", url: "https://en.wikipedia.org/wiki/List_of_cattle_breeds" },
    { name: "Indigenous Cattle Breeds of India", url: "https://dahd.nic.in/about-us/divisions/cattle-and-dairy-development" },
    { name: "Cattle Today Breed Directory", url: "https://cattletoday.com/breeds/" }
  ];
  
  const breedingTechniquesResources = [
    { name: "Artificial Insemination Techniques", url: "https://agritech.tnau.ac.in/ta/animal_husbandry/animhus_cattle_AI.html" },
    { name: "Multiple Ovulation and Embryo Transfer (MOET)", url: "https://www.msdvetmanual.com/management-and-nutrition/management-of-reproduction-cattle/breeding-programs-in-cattle-reproduction" },
    { name: "Sex Sorted Semen Technology", url: "https://www.absglobal.com" },
    { name: "In Vitro Fertilization in Cattle", url: "https://www.isaaa.org/blog/entry/default.asp?BlogDate=3%2F1%2F2023" },
    { name: "Selective Breeding Methods", url: "https://en.engormix.com/dairy-cattle/dairy-reproduction-genetics/breeding-methods-dairy-cattle_a35505/" }
  ];
  
  const educationalResources = [
    { name: "Cattle Breeding Programs Guide", url: "https://www.purinamills.com/cattle-feed/education/detail/the-recipe-for-a-perfect-cattle-breeding-program" },
    { name: "Holstein Foundation Educational Resources", url: "https://www.holsteinfoundation.org/education/workbooks.html" },
    { name: "VikingGenetics Breeding Resources", url: "https://www.vikinggenetics.com" },
    { name: "Ireland's Cattle Breeding Database (ICBF)", url: "https://www.icbf.com" },
    { name: "Cattle and Sheep Farming Education", url: "https://www.forteachersforstudents.com.au/site/themed-curriculum/cattle-sheep-farming/" },
    { name: "Dr. Temple Grandin's Cattle Behavior Resources", url: "https://www.grandin.com" },
    { name: "Bud William's Stockmanship", url: "https://stockmanship.com" }
  ];
  const LinkSection = ({ title, links }) => (
    <div className="resource-links">
      <h3>{title}</h3>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
  
  
  
  return (
    <>
    <ScrollProgressBar/>
    <div className="cow-breeding-portal">
      <header className="portal-header">
        <h1>Indian Cattle Breeding & Conservation</h1>
        <nav className="main-nav">
          <ul>
            <li className={activeTab === 'overview' ? 'active' : ''} onClick={() => setActiveTab('overview')}>Overview</li>
            <li className={activeTab === 'government' ? 'active' : ''} onClick={() => setActiveTab('government')}>Government Initiatives</li>
            <li className={activeTab === 'breeds' ? 'active' : ''} onClick={() => setActiveTab('breeds')}>Cattle Breeds</li>
            <li className={activeTab === 'techniques' ? 'active' : ''} onClick={() => setActiveTab('techniques')}>Breeding Techniques</li>
            <li className={activeTab === 'resources' ? 'active' : ''} onClick={() => setActiveTab('resources')}>Resources</li>
          </ul>
        </nav>
      </header>
      
      <main className="portal-content">
        {activeTab === 'overview' && (
          <div className="content-section">
            <h2>Cattle Breeding in India</h2>
            <p>India has one of the world's largest cattle populations with numerous indigenous breeds adapted to local conditions. These breeds are valuable genetic resources that have evolved over centuries to withstand harsh environmental conditions, resist diseases, and produce milk with high nutritional value.</p>
            
            <div className="info-card">
              <a href='https://pib.gov.in/newsite/PrintRelease.aspx?relid=148601' target='_blank'><h3>Why Indigenous Cattle Conservation Matters</h3></a>
              <ul>
                <li>Preservation of genetic diversity</li>
                <li>Climate resilience and adaptability</li>
                <li>Cultural and religious significance</li>
                <li>Sustainable agricultural practices</li>
              </ul>
            </div>
            
            <p>The focus on indigenous cattle breeding has gained momentum in recent years with various government initiatives aimed at conservation and improvement of native breeds.</p>
            
            <LinkSection title="Learn More About Cattle Breeding" links={overviewResources} />
          </div>
        )}
        
        {activeTab === 'government' && (
          <div className="content-section">
            <h2>Government Initiatives for Cattle Conservation</h2>
            
            <div className="initiative-card">
              <a href='https://maitriupldb.in/' target='_blank'><h3>Rashtriya Gokul Mission (RGM)</h3></a>
              <p>Launched in December 2014, the Rashtriya Gokul Mission aims to develop and conserve indigenous bovine breeds. The scheme enhances milk production and makes dairying more remunerative for rural farmers.</p>
              <h4>Key Objectives:</h4>
              <ul>
                <li>Enhance productivity of bovines using advanced technologies</li>
                <li>Propagate high genetic merit bulls for breeding</li>
                <li>Enhance artificial insemination coverage</li>
                <li>Promote indigenous cattle rearing in a scientific manner</li>
              </ul>
              <p>Budget allocation: Rs. 2400 crore (2021-2026)</p>
            </div>
            
            <div className="initiative-card">
              <a href='https://pib.gov.in/PressReleaseIframePage.aspx?PRID=1813796' target='_blank'><h3>Gokul Gram</h3></a>
              <p>Integrated Indigenous Cattle Centers established in breeding tracts and near metropolitan cities. These centers maintain indigenous cattle with a viable composition of economic and unproductive animals.</p>
            </div>
            
            <div className="initiative-card">
              <a href='https://ahd.uk.gov.in/pages/view/47' target='_blank'><h3>e-GOPALA App</h3></a>
              <p>A comprehensive breed improvement marketplace and information portal launched in September 2020. It helps farmers in:</p>
              <ul>
                <li>Managing livestock</li>
                <li>Buying and selling disease-free germplasm</li>
                <li>Accessing quality breeding services</li>
                <li>Getting guidance on animal nutrition and treatment</li>
              </ul>
            </div>
            
          </div>
        )}
        
        {activeTab === 'breeds' && (
          <div className="content-section">
            <a href='https://en.wikipedia.org/wiki/Indigenous_cattle_breeds_of_India' target='_blank'><h2>Indigenous Cattle Breeds of India</h2></a>
            
            <div className="breed-table">
              <table>
                <thead>
                  <tr>
                    <th>Breed</th>
                    <th>Origin</th>
                    <th>Characteristics</th>
                    <th>Purpose</th>
                    <th>More Info</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Gir</td>
                    <td>Gujarat</td>
                    <td>Distinctive curved horns, red-spotted white coat</td>
                    <td>Dairy, high milk yield</td>
                    <td><a href={breedResources["Gir"]} target="_blank" rel="noopener noreferrer">Learn more</a></td>
                  </tr>
                  <tr>
                    <td>Sahiwal</td>
                    <td>Punjab/Pakistan</td>
                    <td>Solid brown color, docile temperament</td>
                    <td>Dairy, high butterfat (4.8%)</td>
                    <td><a href={breedResources["Sahiwal"]} target="_blank" rel="noopener noreferrer">Learn more</a></td>
                  </tr>
                  <tr>
                    <td>Tharparkar</td>
                    <td>Rajasthan/Pakistan</td>
                    <td>White/gray coat, resistant to harsh conditions</td>
                    <td>Dairy, Draught</td>
                    <td><a href={breedResources["Tharparkar"]} target="_blank" rel="noopener noreferrer">Learn more</a></td>
                  </tr>
                  <tr>
                    <td>Red Sindhi</td>
                    <td>Pakistan</td>
                    <td>Deep red color, well-developed udder</td>
                    <td>Dairy, Meat</td>
                    <td><a href={breedResources["Red Sindhi"]} target="_blank" rel="noopener noreferrer">Learn more</a></td>
                  </tr>
                  <tr>
                    <td>Rathi</td>
                    <td>India</td>
                    <td>Brown coat, well-adapted to arid regions</td>
                    <td>Dairy, Draught</td>
                    <td><a href={breedResources["Rathi"]} target="_blank" rel="noopener noreferrer">Learn more</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="breed-info">
              <h3>Selection Criteria for Indigenous Dairy Cows</h3>
              <p>Farmers typically consider the following traits when selecting indigenous dairy cows:</p>
              <ul>
                <li>Navel size</li>
                <li>Udder and teat size</li>
                <li>Pelvic width</li>
                <li>Milk production potential</li>
                <li>Adaptability to local conditions</li>
              </ul>
            </div>
            
            <LinkSection title="Comprehensive Breed Directories" links={allBreedsResources} />
          </div>
        )}
        
        {activeTab === 'techniques' && (
          <div className="content-section">
            <h2>Breeding Techniques</h2>
            
            <div className="technique-card">
              <h3>Selective Breeding</h3>
              <p>The traditional method where animals with desirable traits are selected as parents for the next generation. Most indigenous breeds evolved through this process over centuries.</p>
              <a href={breedingTechniquesResources[4].url} target="_blank" rel="noopener noreferrer">Learn more about selective breeding</a>
            </div>
            
            <div className="technique-card">
              <h3>Artificial Insemination (AI)</h3>
              <p>The first assisted reproductive technology developed for livestock. It involves collecting semen from males which is then used to impregnate females. Under RGM, efforts are being made to bring AI services to farmers' doorsteps.</p>
              <a href={breedingTechniquesResources[0].url} target="_blank" rel="noopener noreferrer">Learn more about AI techniques</a>
            </div>
            
            <div className="technique-card">
              <h3>Multiple Ovulation and Embryo Transfer (MOET)</h3>
              <p>Advanced technique recommended for production and testing of sires, especially given the limited success in performance recording and long generation intervals in indigenous breeds.</p>
              <a href={breedingTechniquesResources[1].url} target="_blank" rel="noopener noreferrer">Learn more about MOET</a>
            </div>
            
            <div className="technique-card">
              <h3>Sex Sorted Semen</h3>
              <p>Technology introduced to produce female calves with up to 90% accuracy. This can be a game-changer in enhancing milk production while limiting stray cattle population.</p>
              <p>Under government initiatives, subsidy of Rs. 750 or 50% of the cost is available to farmers.</p>
              <a href={breedingTechniquesResources[2].url} target="_blank" rel="noopener noreferrer">Learn more about sex-sorted semen</a>
            </div>
            
            <div className="technique-card">
              <h3>IVF Technology</h3>
              <p>In Vitro Fertilization helps in faster multiplication of superior germplasm. Under RGM, subsidy of Rs. 5000 per assured pregnancy is available to participating farmers.</p>
              <a href={breedingTechniquesResources[3].url} target="_blank" rel="noopener noreferrer">Learn more about IVF in cattle</a>
            </div>
            
            <LinkSection title="Advanced Breeding Resources" links={breedingTechniquesResources} />
          </div>
        )}
        
        {activeTab === 'resources' && (
          <div className="content-section">
            <h2 className='text-black'>Educational Resources</h2>
            <p>Explore these resources to learn more about cattle breeding and conservation:</p>
            
            <LinkSection title="Official Websites" links={governmentResources} />
            <LinkSection title="Breeding Techniques" links={breedingTechniquesResources} />
            <LinkSection title="Cattle Breeds" links={allBreedsResources} />
            <LinkSection title="Educational Materials" links={educationalResources} />
            
            <div className="resource-links">
              <h3>Research Papers</h3>
              <ul>
                <li>
                  <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6264994/" target="_blank" rel="noopener noreferrer">
                    Strategies for conservation and improvement of indigenous cattle breeds
                  </a>
                </li>
                <li>
                  <a href="https://www.researchgate.net/publication/335236790_Cattle_Breeding_Policy_in_India_Status_and_Future_Directions" target="_blank" rel="noopener noreferrer">
                    Cattle breeding programmes in India
                  </a>
                </li>
                <li>
                  <a href="https://www.researchgate.net/publication/343611878_Indigenous_Cattle_Breeding_and_Management_Practices_in_India" target="_blank" rel="noopener noreferrer">
                    Breeding practices in indigenous dairy cattle breeds
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </main>
      
      <div className="video-section">
  <h2>Educational Videos</h2>
  <div className="video-container">
    {(() => {
      const videoLinks = [
        "https://www.youtube.com/watch?v=_rqrrSvango",
        "https://www.youtube.com/watch?v=0FURt0h0YnY",
        "https://www.youtube.com/watch?v=-OMz3-BvGKU",
        "https://www.youtube.com/watch?v=D5x9MjLZJ7Q",
        "https://www.youtube.com/watch?v=1hthHJPgOuM",
        "https://www.youtube.com/watch?v=9MNpYm0FGcw",
        "https://www.youtube.com/watch?v=2itDPIgHxWE",
        "https://www.youtube.com/watch?v=4LuHdiEjtX0",
        "https://www.youtube.com/watch?v=mSw3itKgoD0",
        "https://www.youtube.com/watch?v=7eDX-0ZmIhg",
        "https://www.youtube.com/watch?v=uFXVojOCkK8",
        "https://www.youtube.com/watch?v=7eDX-0ZmIhg",
        "https://www.youtube.com/watch?v=1hthHJPgOuM",
        "https://www.youtube.com/watch?v=z0JaTItHFNY",
        "https://www.youtube.com/watch?v=vDIghmEiVW4",
        "https://www.youtube.com/watch?v=AWXE0Pqypfk",
        "https://www.youtube.com/watch?v=ubJf6mfetM8",
        "https://www.youtube.com/watch?v=vSvDEBLendE",
        "https://www.youtube.com/watch?v=stvnGYcKz60",
        "https://www.youtube.com/watch?v=AQC4T52A7R0",
        "https://www.youtube.com/watch?v=6wnTWFHpTLY",
        "https://www.youtube.com/watch?v=PsDviJ0pTBU",
        "https://www.youtube.com/watch?v=si-1Cc_h854",
        "https://www.youtube.com/watch?v=TwJLQR_P0IM",
        "https://www.youtube.com/watch?v=qWbKoxBi-Qk",
        "https://www.youtube.com/watch?v=evTuHLVizRM",
        "https://www.youtube.com/watch?v=HJI0lst1cyI",
        "https://www.youtube.com/watch?v=g_FE2rU9NPg",
        "https://www.youtube.com/watch?v=npxT_MfjMu4"


      ];
      
      const getRandomLinks = (links, count) => {
        const shuffled = [...links].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
      };
      
      const selectedVideos = getRandomLinks(videoLinks, 4);
      
      const getEmbedUrl = (url) => {
        const videoId = url.split('v=')[1];
        return `https://www.youtube.com/embed/${videoId}`;
      };
      
      return selectedVideos.map((link, index) => (
        <div className="video-iframe-container" key={index}>
          <iframe 
            src={getEmbedUrl(link)}
            title={`Cattle Breeding Video ${index + 1}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ));
    })()}
  </div>
</div>
      
      
    </div>
    </>
  );
};

export default CowBreedingPortal;
