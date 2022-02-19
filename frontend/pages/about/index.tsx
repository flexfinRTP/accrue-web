//our-domain.com/about

//component page to view about

function AboutPage() {
    return (
        <>
            <div>
                <h1 style={{ fontSize: '1.8em', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>About Me</h1>
                <div style={{ width: "100%", textAlign: "center" }}>
                    <br /><br /><br /><br />
                    <div id="home-white"><a href="accruefg.com" rel="noreferrer" target="_blank">
                        See the old website here!</a></div>
                    <br /><br /><br />
                    <div id="home-contact">Contact me today at 
                        <a href="mailto:jgaffney@accruefg.com"> jgaffney@accruefg.com.</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPage;