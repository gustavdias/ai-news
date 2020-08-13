import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: '10%',
    borderRadius: 20,
    color: '#e6f6ff',
  },
  infoCard: {
    display: 'flex', flexDirection: 'column', textAlign: 'center',
  },
  container: {
    padding: '0 1%', width: '100%', margin: 0,
  },
});
