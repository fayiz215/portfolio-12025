const projects = [
    {
        title: "Gold Zakat Calculator",
        image: "img/calc.jpg",
        description: "Application for calculating gold zakat complete with localStorage feature.",
        tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
        repo: "https://github.com/fayiz215/calc-zakat",
        demo: "https://fayiz215.github.io/calc-zakat/"
    },
    {
        title: "Traffic light",
        image: "img/lampu.jpg",
        description: "Traffic light simulation using JavaScript.",
        tags: ["HTML", "CSS", "JavaScript"],
        repo: "https://github.com/fayiz215/traffic",
        demo: "https://fayiz215.github.io/traffic/"
        
    },
    {
        title: "Portfolio Design Sketch",
        image: "img/code1.jpg",
        description: "Simple portfolio website for HTML, CSS and JAVASCRIPT practice.",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://www.figma.com/design/9AfNEiz9CBYZ7loscoc0ZB/my-space-work?node-id=379-61&t=m7xvlL2H94Qko48n-1"
    },
      {
        title: "Calculator",
        image: "img/calcumum.jpg",
        description: "Aplikasi daftar tugas dengan fitur tambah, hapus, dan simpan data.",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://fayiz215.github.io/calc-original/"
    },
    {
        title: "Form ",
        image: "img/form.jpg",
        description: "Aplikasi untuk melihat cuaca realtime menggunakan API.",
        tags: ["HTML", "CSS",],
        link: "https://fayiz215.github.io/form-coding/"
    },
    {
        title: "Mini Website",
        image: "img/miniweb.png",
        description: "Desain halaman login modern dan minimalis.",
        tags: ["HTML", "CSS",],
        link: "https://fayiz215.github.io/web--1-mini/"
    },
];

const gallery = document.getElementById("gallery");

for (let i = 0; i < projects.length; i++) {
    const project = projects[i];

    const card = document.createElement("div");
    card.className = "project-card";

    const img = document.createElement("img");
    img.src = project.image;
    img.className = "image";

    const title = document.createElement("h3");
    title.textContent = project.title;

    const desc = document.createElement("p");
    desc.className = "desc-p";
    desc.textContent = project.description;

    const tags = document.createElement("div");
    tags.className = "tag-content";
    tags.textContent = project.tags.join(", ");

    
    const btnGroup = document.createElement("div");
    btnGroup.className = "btn-group";

    
    if (project.repo) {
        const repoBtn = document.createElement("a");
        repoBtn.href = project.repo;
        repoBtn.target = "_blank";
        repoBtn.textContent = "GitHub Link";
        repoBtn.className = "btnpj";
        btnGroup.appendChild(repoBtn);
    }

    
    if (project.demo) {
        const demoBtn = document.createElement("a");
        demoBtn.href = project.demo;
        demoBtn.target = "_blank";
        demoBtn.textContent = "Live Link";
        demoBtn.className = "btnpj demo";
        btnGroup.appendChild(demoBtn);
    }

    
    if (project.link && !project.repo && !project.demo) {
        const linkBtn = document.createElement("a");
        linkBtn.href = project.link;
        linkBtn.target = "_blank";
        linkBtn.textContent = "Open Link";
        linkBtn.className = "btnpj";
        btnGroup.appendChild(linkBtn);
    }

    
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(tags);
    card.appendChild(btnGroup);

    gallery.appendChild(card);
}


const englishProjects = [
    {
        title: "Stop Bullying Short Movie",
        image: "img/film7.gif",
        description: "A short film about the dangers of bullying and its real-life impact.",
        tags: ["Film", "English", "Moral Message"],
        link: "https://drive.google.com/file/d/1SMzurommFGaBkI5isJW8wFz52tfZjXzq/view?usp=sharing"
    },
    {
        title: "Daily Conversation Practice",
        image: "img/daily.gif",
        description: "A project focusing on daily English speaking activities.",
        tags: ["Speaking", "English", "Practice"],
        link: "https://drive.google.com/drive/folders/1H7FC7p5fhM56nzfNO2v3x6Zk6kTjkUz5?usp=sharing"
    },
    {
        title: "Posters English",
        image: "img/postersenglish.gif",
        description:"Two educational English posters, one for grammar and one for vocabulary, designed with a clean and easy-to-read layout.",
       tags: ["English", "Grammar", "Vocabulary", "Eduposters"],
        link: "https://drive.google.com/drive/folders/14cAn3yDRZEBlVyL9KZv8Ddy2zqvqPhF3?usp=sharing"
    }
];

const englishGallery = document.getElementById("english");

for (let i = 0; i < englishProjects.length; i++) {
    const project = englishProjects[i];

    const card = document.createElement("div");
    card.className = "project-card";

    const img = document.createElement("img");
    img.src = project.image;
    img.className = "image";

    const title = document.createElement("h3");
    title.textContent = project.title;

    const desc = document.createElement("p");
    desc.className = "desc-p";
    desc.textContent = project.description;

    const tags = document.createElement("div");
    tags.className = "tag-content";
    tags.textContent = project.tags.join(", ");

    const linkBtn = document.createElement("a");
    linkBtn.href = project.link;
    linkBtn.textContent = "View Project";
    linkBtn.target = "_blank";
    linkBtn.className = "btnpj";

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(tags);
    card.appendChild(linkBtn);

    englishGallery.appendChild(card);
}

const mulzamProjects = [
    {
        title: "i'rob poster",
        image: "img/irobposter.png",
        description: "A concise educational poster that explains the i‘rāb (grammatical analysis) of Surah An-Nās verses 2 and 3, presented with clear structure, simple visuals, and easy-to-understand breakdowns for students.",
        tags: ["I'rob", "Nahwu", "Poster"],
        link: "https://drive.google.com/drive/folders/1B6r0bDZKWc0NIyqdrNdl9F-lFz3AI2tw?usp=drive_link"
    },
    {
        title: "i'rob video",
        image: "img/irobvideo.gif",
        description: "A short educational video that explains the i‘rāb (grammatical structure) of Surah An-Nās verses 2 and 3, presented with clear narration, simple visuals, and easy-to-follow explanations for learners.",
        tags: ["I'rob", "Nahwu", "Video"],
        link: "https://drive.google.com/drive/folders/1eQOzPx131lA0u7xAWQGi0aI-lOPVOTP-?usp=sharing"
    },
    {
        title: "Matan Al Ajrumiyah-Nahwu Book",
        image: "img/matan.jpg",
        description: "A concise introductory book on Arabic grammar (nahwu), presenting essential rules in a clear, structured, and easy-to-memorize format for beginners.",
        tags: ["Nawhu", "Book"],
        link: "https://andridm72.wordpress.com/wp-content/uploads/2014/12/al-jurmiyah.pdf"
    }
];


const mulzamGallery = document.getElementById("mulzam");

for (let i = 0; i < mulzamProjects.length; i++) {
    const project = mulzamProjects[i];

    const card = document.createElement("div");
    card.className = "project-card";

    const img = document.createElement("img");
    img.src = project.image;
    img.className = "image";

    const title = document.createElement("h3");
    title.textContent = project.title;

    const desc = document.createElement("p");
    desc.className = "desc-p";
    desc.textContent = project.description;

    const tags = document.createElement("div");
    tags.className = "tag-content";
    tags.textContent = project.tags.join(", ");

    const linkBtn = document.createElement("a");
    linkBtn.href = project.link;
    linkBtn.textContent = "View Project";
    linkBtn.target = "_blank";
    linkBtn.className = "btnpj";

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(tags);
    card.appendChild(linkBtn);

    mulzamGallery.appendChild(card);
}





