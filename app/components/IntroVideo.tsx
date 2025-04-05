import Image from 'next/image';
interface Props{
    src:string
}

const IntroVideo: React.FC<Props> = ({ src }) => {
    return (
        <Image alt="bildit CMS intro video" src={src} width={1085} height={611}/>
        // <video width="1085" controls>
        //     <source src="/videos/sample.mp4" type="video/mp4" />
        //     Your browser does not support the video tag.
        // </video>
    )
}

export default IntroVideo;