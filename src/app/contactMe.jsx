import { Download, Facebook, GitHub, Instagram, LinkedIn, Mail } from '@mui/icons-material';

const socialMediaLinks = {
    Github: 'https://github.com/tkhalim14',
    Gmail: 'mailto:tkhalim14@gmail.com',
    Instagram: 'https://www.instagram.com/thesnagtalker007/',
    Resume: 'https://drive.google.com/file/d/1yyR_aFOmmxuSQa3mrZzdupTi3-wGQQ8Y/view?usp=sharing',
    Linkedin: 'https://www.linkedin.com/in/tabish-khalid-halim-27209b201/',
    Facebook: 'https://www.facebook.com/tabish.khalidhalim/',
};

const socialMediaIcons = {
    Github: <GitHub key="github" />,
    Gmail: <Mail key="gmail" />,
    Instagram: <Instagram key="instagram" />,
    Linkedin: <LinkedIn key="linkedin" />,
    Resume: <Download key="resume" />,
    Facebook: <Facebook key="facebook" />,
};

export { socialMediaLinks, socialMediaIcons };
