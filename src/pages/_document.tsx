import Document, { Html, Head, Main,  NextScript} from  'next/document';
// importação das fontes
export default class MyDocument extends Document {
    render() {
        return(
<Html> 
    <Head>
    <link rel = "preconnect" href = "https://fonts.gstatic.com"/>
    <link href = "https://fonts.googleapis.com/css2? family = Noto + Sans + HK: wght @ 300 & display = swap "rel =" stylesheet "></link>
    </Head>
    <body>
        <Main/>
        <NextScript/>
    </body>
</Html>
        )
    }
}