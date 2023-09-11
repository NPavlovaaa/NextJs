import Link from "next/link";

export default function A({href, text, color}){
    console.log(color)
    return(
        <Link href={href}
              style={{
                  textDecoration: 'none',
                  color: `${color}`,
                  fontSize: 20
              }}
        >{text}</Link>
    )
}