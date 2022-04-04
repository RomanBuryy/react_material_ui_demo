import './App.css';

import {
    Button,
    Typography,
    AppBar,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CssBaseline,
    Grid,
    Toolbar,
    Container
} from '@mui/material'
import {PhotoCamera} from "@mui/icons-material";
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles({
    container: {
        backgroundColor: '#fff',
        padding: '40px'
    },

    icons: {
        marginRight: '20px'
    },

    buttons: {
        marginTop: '40px'
    },
    cardGrid: {
        padding: '20px 0'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%'
    },
    cardContent: {
        flexGrow: 1
    }


});


function App() {
    const classes = useStyles();
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <>
            <CssBaseline/>

            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera className={classes.icons}/>
                    <Typography variant={"h6"}>
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth={"sm"}>
                        <Typography variant={"h2"} align={"center"} color={"textPrimary"} gutterBottom>
                            Photo Album
                        </Typography>

                        <Typography variant={"h5"} align={"center"} color={"textSecondary"} paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos fugiat fugit neque officia
                            placeat quos repudiandae. Dignissimos dolore esse est, excepturi, impedit nihil officiis
                            possimus provident, reiciendis rem sit soluta.
                        </Typography>

                        <div className={classes.buttons}>
                            <Grid container spacing={2} justifyContent={"center"}>
                                <Grid item>
                                    <Button variant={"contained"} color={"primary"}>
                                        See my photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant={"outlined"} color={"primary"}>
                                        Secondary action
                                    </Button>
                                </Grid>

                            </Grid>
                        </div>

                    </Container>
                </div>

                <Container className={classes.cardGrid} maxWidth={"md"}>
                    <Grid container spacing={4}>

                        {cards.map(card => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card} sx={{boxShadow: 3}}>
                                    <CardMedia className={classes.cardMedia}
                                               image={'https://source.unsplash.com/random'}
                                               title={'Image title'}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography variant={"h5"} gutterBottom>
                                            Heading
                                        </Typography>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto
                                            earum facere id in ipsa maiores nam natus necessitatibus nisi nulla odio
                                            perspiciatis quas rem reprehenderit sequi sit tempora, unde.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size={"small"} color={"primary"}>View</Button>
                                        <Button size={"small"} color={"primary"}>Edit</Button>
                                    </CardActions>

                                </Card>
                            </Grid>
                        ))}


                    </Grid>
                </Container>


            </main>

        </>
    );
}

export default App;
