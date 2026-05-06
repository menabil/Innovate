
const Heading = ({text}) => {
   let pattern = /#([^#]+)#/g;
   let textWithSpans = text.replace(pattern,"<span class='one'>$1</span>");

    return (
    <h1 dangerouslySetInnerHTML={{ __html: textWithSpans }}/>
    )

}

export default Heading