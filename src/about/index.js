import { Prose } from "../prose";
import s from "./styles.scss";

export const About = () => {
    return <div className={s.container}>
        <div className={s.box}>
            <Prose>
                <h1>D&apos;Hondt calculator</h1>

                <p>
                    This is an online tool to simulate elections using the <a href="https://en.wikipedia.org/wiki/D%27Hondt_method">D&apos;Hondt method</a>.
                </p>

                <p>
                    The <em>D&apos;Hondt method</em> is a commonly used method for translating votes into seats in proportional representation systems. It minimizes the number of votes that need to be left aside so that the remaining votes are represented exactly proportionally.
                </p>

                <p>
                    While the inaccuracies introduced by the <em>D&apos;Hondt method</em> are typically small (fractions of a seat) and hard to avoid using any method (fractions of a seat typically can not be assigned), D&apos;Hondt method is unique in that it <strong>consistently promotes larger parties at expense of smaller ones</strong>.
                </p>

                <p>
                    Because of that, fractional innacuracies typically accumulate to large numbers of seats gained/lost if the elections are run throughout multiple voting districts. Similarly, a party with large, but local support can win large amount of seats in national elections.
                </p>

                <p>
                    As an example, in <a href="https://en.wikipedia.org/wiki/2008_Spanish_general_election">2008 Spanish general election</a> party <em>United Left</em> won a single seat with ~960,000 votes, meanwhile <em>Convergence and Union</em> won 10 seats with just ~780,000 votes.
                </p>

                <p>
                    Another example, in <a href="https://en.wikipedia.org/wiki/2015_Polish_parliamentary_election">2015 Polish parliamentary election</a> party Law and Justice gained <strong>51%</strong> of all seats and complete control of the chamber with only <strong>37.6%</strong> votes nationwide. 
                </p>

                <p>
                    This tool aims to simulate elections using the D&apos;Hondt method, hopefully making it&apos;s inaccuracies more widely known and easier to analyze.
                </p>
            </Prose>
        </div>
    </div>
}

export default About;