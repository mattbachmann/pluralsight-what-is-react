export default function Home() { // Next.js entry point

    function ListItems() { // inner component function
        const ints = [1, 2, 3];
        return (
            <>
                {
                    ints.map(id => {
                        return (
                            <li>{id}</li>
                        )
                    })
                }
            </>
        )
    }

    return (
        <ul>
            <ListItems />
        </ul>
    )
}
