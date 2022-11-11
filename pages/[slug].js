import { useRouter } from "next/router";
import path from 'path';
import fs from 'fs';
import _ from 'lodash'

export async function getStaticPaths() {
    return {
      paths: [
        {
            params: {
                slug: 'books'
            }
        }
      ],
      fallback: true
    }
  }

export async function getStaticProps(context) {
    const items = fs.readFileSync(path.join(process.cwd(), "public", "items", "books.json"));
    return {
      props: {
        items: _.shuffle(JSON.parse(items))
      }, 
    }
  }

export default function Page({ items }) {
    const router = useRouter()
    const { slug } = router.query;

    return <>
        <h1>{slug}</h1>
        <ul>
            {
                items.map((element) => (
                    <li key={element.url}><a href={element.url}>{element.title}</a></li>
                ))
            }
        </ul>
    </>;
}