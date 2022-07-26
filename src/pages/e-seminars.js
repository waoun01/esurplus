/** @jsx jsx */
import { jsx } from 'theme-ui';
import ESem from 'assets/newimg.png';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';



export default function About() {
    return (
        
        <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
                <Image
                    src={ESem}
                    alt="E-Surplus Seminars"
                    layout="fill"
                    objectFit="cover"
                    style={{
                        margin: "auto",
                    }}
                />
      </div>
    </>
    )
}
