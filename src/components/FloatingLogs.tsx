const FloatingLogs = () => {
  const logos = [
    { src: "/images/logos/Abcore.webp", alt: "Abcore" },
    { src: "/images/logos/ABT.webp", alt: "ABT" },
    { src: "/images/logos/ACD.webp", alt: "ACD" },
    { src: "/images/logos/Altamira.webp", alt: "Altamira" },
    { src: "/images/logos/Applied Biomath.webp", alt: "Applied Biomath" },
    { src: "/images/logos/Arbele.webp", alt: "Arbele" },
    { src: "/images/logos/Arialys.webp", alt: "Arialys" },
    { src: "/images/logos/Arthrosi.webp", alt: "Arthrosi" },
    { src: "/images/logos/ATD Bio.webp", alt: "ATD Bio" },
    { src: "/images/logos/Avelas.webp", alt: "Avelas" },
    { src: "/images/logos/Bio-Techne.webp", alt: "Bio-Techne" },
    { src: "/images/logos/Biolegend.webp", alt: "Biolegend" },
    { src: "/images/logos/Bioniz.webp", alt: "Bioniz" },
    { src: "/images/logos/BriaCell.webp", alt: "BriaCell" },
    { src: "/images/logos/BroadPharm.webp", alt: "BroadPharm" },
    { src: "/images/logos/BURL-Concepts.webp", alt: "BURL-Concepts" },
    { src: "/images/logos/CancerVAX.webp", alt: "CancerVAX" },
    { src: "/images/logos/Canopy.webp", alt: "Canopy" },
    { src: "/images/logos/ChemDiv.webp", alt: "ChemDiv" },
    { src: "/images/logos/Chimera Bio.webp", alt: "Chimera Bio" },
    { src: "/images/logos/Chromocyte.webp", alt: "Chromocyte" },
    { src: "/images/logos/Codex DNA.webp", alt: "Codex DNA" },
    { src: "/images/logos/Crescendo Biologics.webp", alt: "Crescendo Biologics" },
    { src: "/images/logos/CurVirBiotech.webp", alt: "CurVirBiotech" },
    { src: "/images/logos/Dimerix.webp", alt: "Dimerix" },
    { src: "/images/logos/Elsie Bio.webp", alt: "Elsie Bio" },
    { src: "/images/logos/Endogena.webp", alt: "Endogena" },
    { src: "/images/logos/Histogen.webp", alt: "Histogen" },
    { src: "/images/logos/Inflammatix.webp", alt: "Inflammatix" },
    { src: "/images/logos/Inivata.webp", alt: "Inivata" },
    { src: "/images/logos/Innova Biosciences.webp", alt: "Innova Biosciences" },
    { src: "/images/logos/Inso Bio.webp", alt: "Inso Bio" },
    { src: "/images/logos/Insphero.webp", alt: "Insphero" },
    { src: "/images/logos/Intuitive Bio.webp", alt: "Intuitive Bio" },
    { src: "/images/logos/Invion.webp", alt: "Invion" },
    { src: "/images/logos/Lonza.webp", alt: "Lonza" },
    { src: "/images/logos/May Health.webp", alt: "May Health" },
    { src: "/images/logos/Merck.webp", alt: "Merck" },
    { src: "/images/logos/MilliporeSigma.webp", alt: "MilliporeSigma" },
    { src: "/images/logos/Mission Tx.webp", alt: "Mission Tx" },
    { src: "/images/logos/Neubase.webp", alt: "Neubase" },
    { src: "/images/logos/Neuropore.webp", alt: "Neuropore" },
    { src: "/images/logos/NeuroTrials.webp", alt: "NeuroTrials" },
    { src: "/images/logos/NIH.webp", alt: "NIH" },
    { src: "/images/logos/NovaBiotics.webp", alt: "NovaBiotics" },
    { src: "/images/logos/Numaferm.webp", alt: "Numaferm" },
    { src: "/images/logos/OncoMyx.webp", alt: "OncoMyx" },
    { src: "/images/logos/Patrys.webp", alt: "Patrys" },
    { src: "/images/logos/Presympto.webp", alt: "Presympto" },
    { src: "/images/logos/ProbiusDx.webp", alt: "ProbiusDx" },
    { src: "/images/logos/Quantum Si.webp", alt: "Quantum Si" },
    { src: "/images/logos/Recce.webp", alt: "Recce" },
    { src: "/images/logos/SAb Bio.webp", alt: "SAb Bio" },
    { src: "/images/logos/Serimmune.webp", alt: "Serimmune" },
    { src: "/images/logos/SRP.webp", alt: "SRP" },
    { src: "/images/logos/StarPharma.webp", alt: "StarPharma" },
    { src: "/images/logos/Tavotek.webp", alt: "Tavotek" },
    { src: "/images/logos/Tecan.webp", alt: "Tecan" },
    { src: "/images/logos/Unither.webp", alt: "Unither" },
    { src: "/images/logos/Valo Tx.webp", alt: "Valo Tx" },
    { src: "/images/logos/Verona.webp", alt: "Verona" },
    { src: "/images/logos/ViaCyte.webp", alt: "ViaCyte" },
    { src: "/images/logos/YDS.webp", alt: "YDS" },
    { src: "/images/logos/YHM.webp", alt: "YHM" },
  ];

  const LogoItem = ({ logo }: { logo: { src: string; alt: string } }) => (
    <div className="backdrop-blur-sm rounded-lg flex items-center justify-center max-w-[140px] h-[39px] md:h-[52.83px] flex-shrink-0">
      <img 
        src={logo.src} 
        alt={logo.alt} 
        className="h-[32px] md:h-[40px] w-auto max-w-full object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300" 
      />
    </div>
  );

  return (
    <div className="flex animate-scroll w-max">
      {/* First set of logos */}
      <div className="flex items-center space-x-24 flex-shrink-0">
        {logos.map((logo, index) => (
          <LogoItem key={`first-${index}`} logo={logo} />
        ))}
      </div>
      
      {/* Duplicate set for seamless loop */}
      <div className="flex items-center space-x-24 flex-shrink-0 pr-6">
        {logos.map((logo, index) => (
          <LogoItem key={`second-${index}`} logo={logo} />
        ))}
      </div>
    </div>
  );
};

export default FloatingLogs;