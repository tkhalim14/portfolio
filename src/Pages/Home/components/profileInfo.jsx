import { LocationOn } from '@mui/icons-material';
import colors from '../../../Components/Constants/colorScheme';
import { TypewriterEffect } from './index';
import {
  Grid,
  Card,
  Tooltip,
  CardContent,
  Typography,
  Box
} from '@mui/material';

const Fields = [
  'Artificial Intelligence',
  'Application Development',
  'Competitive Programming',
  'UI/UX Design',
  'Open Source Work'
];

const ProfileCard = () => (
  <Card sx={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }} alt="ProfileCard">
    <CardContent>
      <Typography variant="h3" component="div" sx={{
            letterSpacing: '1rem',
            fontWeight: 800,
            fontFamily: 'Unispace',
            paddingBottom: '1rem'
        }}>
            Tabish Khalid<br />Halim
        </Typography>

      <div style={{ fontSize: 14, letterSpacing: 0.5 }} color="text.secondary">
        B.Tech, CSE&apos;24
        &nbsp;&nbsp;
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            color: colors[3]
          }}
        >
          <Tooltip
            placement="left-start"
            title={
              <iframe
                title="IIT Dharwad"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30757.25973446724!2d74.90965591427177!3d15.502846146221314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf32db0fffffff%3A0x41e1ca5b252a94d!2sIndian%20Institute%20of%20Technology%20Dharwad!5e0!3m2!1sen!2sin!4v1723130139271!5m2!1sen!2sin"
                width={'400'}
                height={'200'}
                style={{ border: 0, borderRadius: 4 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            }
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: 'transparent'
                }
              }
            }}
          >
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <a
                href="https://www.iitdh.ac.in"
                style={{ color: colors[3] }}
              >
                IIT Dharwad
              </a>
              <LocationOn
                fontSize="small"
                sx={{ color: '#ea4335', ml: 1 }}
              />
            </Box>
          </Tooltip>
        </div>
      </div>

      <span style={{ margin: '0 1rem' }}>
        <TypewriterEffect
          fields={Fields}
          highlightColor={colors[4]}
        />
        <br />
      </span>

      <Typography>
        I am characterized by my passion and dedication towards coding,
        consistently striving to enhance my skills and delve into novel realms.
        My commitment to self-improvement and exploration remains steadfast.
        <br /><br />
      </Typography>

      <Grid container spacing={5}>
        <Grid>
          Thanks for visiting my portfolio. Explore my projects and experiences,
          and let&apos;s connect!
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default ProfileCard;
