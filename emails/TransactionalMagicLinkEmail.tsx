import { Button, Container, Font, Head, Heading, Html, Img, Text, Hr } from "@react-email/components";
import * as React from "react";

interface TransactionalMagicLinkEmailProps {
    token: string;
    email: string;
}

export default function TransactionalMagicLinkEmail({
    token,
    email,
}: TransactionalMagicLinkEmailProps) {

    const WEBSITE_URL = "http://localhost:3000"
    const CDN_URL = "https://d195refkbuvlt0.cloudfront.net"
    const hStyle: React.CSSProperties = {
        fontSize: '2.25rem',
        color: '#252122',
        fontFamily: 'Gentium',
    }
    const pStyle: React.CSSProperties = {
        fontSize: '1.25rem',
        color: '#252122',
        fontFamily: 'Mukta',
    }

    return (
        <Html
            lang={`en`}
            dir={`ltr`}
            style={{
                backgroundColor: '#F0EEEF',
                maxWidth: '100%',
            }}
        >
            <Head>
                <title>Log in to Canadian Tui Na Association</title>
                <Font
                    fontFamily="Gentium"
                    fallbackFontFamily="Times New Roman"
                    webFont={{
                        url: "https://fonts.googleapis.com/css2?family=Gentium+Book+Plus&display=swap",
                        format: "woff2",
                    }}
                    fontWeight={400}
                    fontStyle="normal"
                />
                <Font
                    fontFamily="Mukta"
                    fallbackFontFamily="Times New Roman"
                    webFont={{
                        url: "https://fonts.googleapis.com/css2?family=Mukta:wght@400&display=swap",
                        format: "woff2",
                    }}
                    fontWeight={400}
                    fontStyle="normal"
                />
            </Head>
            <div
                style={{
                    paddingTop: '2rem',
                    paddingBottom: '2rem',
                }}
            >
                <Container>
                    <Img
                        src={`${CDN_URL}/logo-horizontal-x192.png`}
                        alt={`Canadian Tui Na Association`}
                        width={420}
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                        }}
                    />
                    <Heading
                        style={{
                            ...hStyle,
                            marginTop: '1rem',
                        }}
                    >Log in to Canadian Tui Na Association</Heading>
                    <Text
                        style={pStyle}
                    >Click the button below to securely log in. This log in link will expire after 10 minutes.</Text>
                    <Button
                        href={`${WEBSITE_URL}/api/magic/verify/${token}/${email}`}
                        style={{
                            background: "#252122",
                            fontSize: '1.25rem',
                            color: "#F0EEEF",
                            padding: "16px 32px",
                            borderRadius: '999rem',
                            fontWeight: 600,
                            textAlign: 'center',
                        }}
                    >
                        Log in to Canadian Tui Na Association
                    </Button>
                    <Hr
                        style={{
                            marginTop: '2rem',
                            borderColor: '#76696C',
                        }}
                    />
                    <Text
                        style={{
                            ...pStyle,
                            fontSize: '.85rem',
                            color: '#5B5154',
                        }}
                    >This email is strictly confidential and is only for the intended recipient. Please do not share this email with anyone else. If you are not the intended recipient, please dispose promptly.</Text>
                </Container>
            </div>
        </Html>
    );
}
