export default function ApproachService(){
    return(
        <div className="bg-white py-64">
            <div className="container">
                <div className="mb-24">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold  text-center">Our Core Principles</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-16">
                    <div className="text-center text-black text-pretty">
                            <h1 className="text-2xl md:font-bold title mb-4">Client-Centric</h1>
                            <p>Deep understanding of client needs is the foundation of every solution.</p>
                            <p>We craft tailored solutions by focusing on each client's unique goals, needs, and challenges.</p>
                    </div>

                    <div className="text-center text-black text-pretty">
                            <h1 className="text-2xl md:font-bold title mb-4">Performance-Driven</h1>
                            <p>Every step is driven by the goal of creating real value.</p>
                            <p>Our approach focuses on resource optimization, streamlined processes, and impactful outcomes.</p>
                    </div>

                    <div className="text-center text-black text-pretty">
                            <h1 className="text-2xl md:font-bold title mb-4">Continuous Engagement</h1>
                            <p>Our commitment goes beyond the project delivery.</p>
                            <p>We offer ongoing support, periodic analysis, and continuous improvements to ensure lasting effectiveness.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}