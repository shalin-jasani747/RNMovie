import { StyleSheet } from 'react-native';
import Colors from '../../../theme/Colors';

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: Colors.black },
  cardText: { color: Colors.white },
  genreText: { color: Colors.white, marginLeft: 10 },
  userScore: { color: Colors.white, marginTop: 15, marginHorizontal: 10 },
  USPT: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginTop: 30
  },
  Play: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -5
  },
  percentageText: { color: Colors.white },
  ProgresssCircle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -20,
    marginHorizontal: -5
  },
  nameTextStyle: {
    fontSize: 30,
    marginHorizontal: 10,
    fontWeight: '500',
    alignSelf: 'center',
    color: Colors.white
  },
  tagline: {
    fontSize: 20,
    fontWeight: '200',
    alignSelf: 'center',
    color: Colors.white,
    marginHorizontal: 20
  },
  status: {},

  text2021: {
    fontSize: 30,
    color: Colors.white
  },
  nameTagView: {
    marginTop: 10,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  image: {
    height: 170,
    width: 130,
    borderRadius: 10
  },
  imgBackground: {
    width: 420,
    height: 400,
    resizeMode: 'stretch',
    shadowColor: Colors.black,
    shadowOpacity: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 10
  },
  card: {
    shadowColor: Colors.black,
    shadowOpacity: 2,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: Colors.white,
    alignItems: 'flex-start',
    marginTop: 100,
    margin: 10,
    marginHorizontal: 15,
    width: 130,
    height: 170
  },
  card2: {
    shadowColor: Colors.black,
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 1,
    backgroundColor: Colors.highlyDarkGrey,
    alignItems: 'baseline',
    marginTop: 30,
    width: 420,
    height: 120
  },
  cardFilm: { flexDirection: 'row', alignContent: 'space-between', alignItems: 'center' },
  icon: { marginTop: -5, marginHorizontal: 10 },
  filmIcon: { marginHorizontal: 10, marginBottom: 5 },
  overview: {
    marginHorizontal: 20,
    fontSize: 20,
    color: Colors.white
  },
  Discription: {
    margin: 10,
    color: Colors.white,
    marginHorizontal: 20,
    marginBottom: 40
  },
  discritionGrey: { margin: 30, alignItems: 'center', alignSelf: 'center' },
  DirectorName: {
    marginTop: 40,
    marginHorizontal: 20,
    fontSize: 20,
    color: Colors.white
  },
  DirectorDsg: {
    marginHorizontal: 20,
    color: Colors.white,
    marginTop: 10
  },
  favouriteIcon: {
    marginRight: 10
  },
  eyeIcon: {
    marginRight: 10
  },
  iconContainer: { flex: 1, justifyContent: 'flex-end', flexDirection: 'row', padding: 10}
});
export default styles;
