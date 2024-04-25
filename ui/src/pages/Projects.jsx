import React from 'react'

import {
    ThemeProvider,
    StyleReset,
    Div,
} from 'atomize'

const theme = {
    colors: {
        black900: '#1d1d1e',
    },
}

export default function Projects() {
    return (
        <ThemeProvider theme={theme}>
            <StyleReset />
                <Div
                    textColor="black900"
                    w="80%"
                    h="90%"
                    maxW="800px"
                    minW="600px"
                    m={{ x: 'auto', y: '2rem', }}
                    p={{ x: '2rem', y: '2rem', }}
                    d="flex"
                    justify="center"
                    flexDir="column"
                >
            <div>
            <h1>Projects</h1>
            <h2>Genomic Basis of Adaptive Evolution</h2>
            <p>Stickleback repeated adaptation to new environments provide a powerful mechanism to study the molecular genetics of evolutionary changes in wild populations. As we develop stickleback genomic sequencing technologies, we can start mapping genes that control evolutionary change to the genetic basis of adaptive evolution.</p>
            
            <h2>Marine Stickleback Genome</h2>
            <p>The newly minted marine stickleback genome was assembled into 22 chromosomes, 455MB in genome length with an N50 of 21,246,911 base pairs and nearly gapless with only 715 gaps remaining. The marine stickleback from the Rabbit Slough, Alaska population was sequenced by combining several long read sequencing technologies with comprehensive enhanced informative short read Illumina sequencing.</p>
            <ul>
                <li>Visualization: <a href="http://genome.ucsc.edu/cgi-bin/hgHubConnect?hgHub_do_redirect=on&hgHubConnect.remakeTrackHub=on&hgHub_do_firstDb=1&hubUrl=http://trackhub.genome.duke.edu/lowelab/edotau/rabsTHREEspine/myHub/hub.txt">UCSC Genome Browser</a></li>
                <li>Chain Nets to other stickleback assemblies are available: <a href="https://edotau.github.io/chainNets">Here</a></li>
                <li>Stickleback Assembly: <a href="http://trackhub.genome.duke.edu/lowelab/edotau/rabsTHREEspine/rabsTHREEspine.fa">Download</a></li>
                <li>Raw Fastq Data Files: <a href="http://trackhub.genome.duke.edu/lowelab/edotau/rabsTHREEspine/raw_data/assembly/pacbio/">PacBio</a>, <a href="http://trackhub.genome.duke.edu/lowelab/edotau/rabsTHREEspine/raw_data/assembly/10xGenomics">10x Genomics</a>, <a href="http://trackhub.genome.duke.edu/lowelab/edotau/rabsTHREEspine/raw_data/assembly/hic">Hi-C</a>, <a href="http://trackhub.genome.duke.edu/lowelab/edotau/rabsTHREEspine/raw_data/assembly/nanopore">Nanopore</a></li>
            </ul>

            <h2>Genome-Wide Variation Between Freshwater and Marine Stickleback</h2>
            Pairwise maine and freshwater stickleback genome alignments were produced in [AXT](https://genome.ucsc.edu/goldenPath/help/axt.html) format with [LASTZ](http://www.bx.psu.edu/~rsharris/lastz/README.lastz-1.04.03.html) and converted to [CHAIN](https://genome.ucsc.edu/goldenPath/help/chain.html) format with [axtChain](https://github.com/ENCODE-DCC/kentUtils/blob/master/src/hg/mouseStuff/axtChain/axtChain.c) . AXT and CHAIN alignments were generated in both directions. The set of alignments were computed using the marine stickleback as the target genome which used the freshwater stickleback as the query genome. However, the second set of alignments were computed in reverse, this time with freshwater genome as the target with the marine stickleback as its query genome and further processed using [chainSwap](https://github.com/ENCODE-DCC/kentUtils/blob/master/src/hg/mouseStuff/chainSwap/chainSwap.c) . LASTZ and axtChain were programmed into a wrapping [script](https://raw.githubusercontent.com/edotau/sticklebackCipher/master/lastz/lastz.sh) . All chains were merged and sorted with [chainMergeSort](https://github.com/ENCODE-DCC/kentUtils/blob/master/src/hg/mouseStuff/chainMergeSort/chainMergeSort.c) . Finally the best alignments from chains are selected with [chainNet](https://github.com/ENCODE-DCC/kentUtils/blob/master/src/hg/mouseStuff/chainNet/chainNet.c) using a red-black trees algorithm to keep track of areas of a chromosome are already covered until there are no bases left and distinguish duplicated from non-duplicated regions. The resulting file is hierarchical collection of chains, with the highest-scoring non-overlapping chains on top, and gaps filled by possible lower-scoring chains called a NET. Nets are single-coverage target genomes, but not for query genomes unless it has been filtered to be single-coverage on both target and query. We generated reciprocal-best netted chains our pairwise netted chains by writing a wrapping [bash script](https://raw.githubusercontent.com/edotau/sticklebackCipher/master/lastz/reciprocalBestChainNets.sh) . All programs to process chains and nets are open sourced UCSC Kent Utilities developed to examines genomic duplications, deletions, and rearrangements of the first whole-genome comparisons between human and mouse [J Kent 2003](https://www.pnas.org/content/pnas/100/20/11484.full.pdf).


            {/* Repeat similar structure for the rest of the sections */}
            
            <h2>Stickleback Genes and Transcripts</h2>
            <ul>
                <li>Ensembl Mapped: <a href="http://trackhub.genome.duke.edu/lowelab/edotau/rabsTHREEspine/myHub/genes/genePred/rabsTHREEspine.ensembl.mapped.gp">genePred</a>, <a href="http://trackhub.genome.duke.edu/lowelab/edotau/rabsTHREEspine/myHub/genes/gtf/rabsTHREEspine.ensembl.mapped.gtf">GTF</a>, <a href="http://trackhub.genome.duke.edu/lowelab/edotau/rabsTHREEspine/myHub/genes/gff/rabsTHREEspine.ensembl.mapped.gff">GFF3</a></li>
                <li>RNASEQ Genes: <a href="http://trackhub.genome.duke.edu/lowelab/edotau/rabsTHREEspine/myHub/genes/genePred/rna-seq.genes.mapped.ensembl.gp">genePred</a>, <a href="http://trackhub.genome.duke.edu/lowelab/edotau/rabsTHREEspine/myHub/genes/gtf/rna-seq.genes.mapped.ensembl.gtf">GTF</a>, <a href="http://trackhub.genome.duke.edu/lowelab/edotau/rabsTHREEspine/myHub/genes/gff/rna-seq.genes.mapped.ensembl.gff">GFF3</a></li>
            </ul>

            <h3>Marine Freshwater Hybrid Crosses</h3>
            <li>GATK: <a href="http://trackhub.genome.duke.edu/lowelab/edotau/rabsTHREEspine/myHub/vcfs/snps">SNPS</a>, <a href="http://trackhub.genome.duke.edu/lowelab/edotau/rabsTHREEspine/myHub/vcfs/indels">INDELS</a></li>

            {/* Images and additional text can be added similarly */}
            
            <img src="/pictures/pilotF1Hybrid.svg" alt="Pilot F1 Hybrid" style={{ height: 400, width: 600,}} />
            <img src="/pictures/chr04_30595050_30815018.svg" alt="Chromosome" style={{ height: 400, width: 800, }} />

            {/* Add additional sections and images as needed */}
        </div>
        </Div>
    </ThemeProvider>
    )
}
