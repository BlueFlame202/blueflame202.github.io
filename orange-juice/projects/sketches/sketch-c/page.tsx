'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react';

export default function Page() {

    useEffect(() => {
        if (typeof window !== 'undefined' && window.MathJax) {
          // Tell MathJax to typeset the page again
          window.MathJax.typeset();
        }
      });

    return (
        <main>
            <Link href="/orange-juice/sketches/"><i>See all sketches...</i></Link>
            <h1 className="title">Sketch 3</h1>
                <p><b>Princeton SGQ Fall 2013 Algebra Q1.1</b></p>
                <hr/>
                <h2>If I Have To Be Honest...</h2>
                <p>My original intention for sketches was that I could reconstruct mathematics (and other fields like machine learning, etc.), with all questions in the sketches being posed and answered by me so that I could maximize my understanding of the motivations behind definitions and results in mathematics. Today I was looking through the past Princeton General Examinations for math, which are all transcribed on Princeton&apos;s website. It wasn&apos;t my first time on the site: a little less than a year ago, my complex analysis professor, Professor Sprung, brought up the website in a remark about Manjul Bhargava&apos;s examination. Reminded of that, I wanted to revisit the website today. I must say, I have the utmost respect for all those who have taken the generals; it&apos;s actually incredible how well everyone knows everything, and everyone is also so lighthearted and comedic! At the same time, I have an intense longing to be as cool. In particular, I was immensely inspired by Levent Alpoge&apos;s generals, where he even knew the history of the proofs of Riemann&apos;s mapping theorem. Thankfully Professor Sprung gave us numerous stories and historical references, but I feel that I&apos;ve somewhat neglected this for my other subjects, and in my creation of <i>Strawberry Milk</i>. Reading Alpoge&apos;s general just made me realize that I don&apos;t just want to rederive mathematics all for myself, but that I also want to relish the history and efforts of all the mathematicians that came before me. It also made me realize that I have a lot of mathematics left to master. So this will be the first sketch, every other day from now until I finish it, I pinky promise to (<i>thoroughly</i>) finish one question from Princeton&apos;s Standard General Questions Fall 2013 Edition, Algebra Questions Compilation. I know I (supposedly) have the technical background, but what I need to master now is the practice (the flaw which was fatal to me last semester).The ground rules are that I should start by thinking of all solutions that I can think of without any use of internet or help from professors, and then following a 24 hour period I can consult the internet or professors at Berkeley to fully master all the concepts behind the problem.</p>

                <p>
                    <b>Date Started:</b> January 18, 2024<br />
                    <b>Date Finished:</b> <i>Unfinished</i>
                </p>

                <h2>Princeton SGQ Fall 2013 Algebra Q1.1</h2>

                <p>For those of you who don&apos;t have it open, the question goes like this: <i>What is a normal subgroup? Can you get some natural map from a normal subgroup? What topological objects can the original group, normal subgroup, and quotient group relate to?</i></p>

                <p>A <b>normal subgroup</b> \(H\) for a group \(G\) is a subgroup such that for all \(g \in G\), \(gH = Hg\) where \(gH\) and \(Hg\) are cosets. We get a natural projection map, \(\pi : G \rightarrow G/H\), although this isn&apos;t exactly a natural map from the <i>normal subgroup</i>. I&apos;ll have to think about that more....</p>


        </main>
    );
}
