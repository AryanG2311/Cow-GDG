import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { 
  Box, 
  Container, 
  Typography, 
  CircularProgress, 
  Card, 
  CardContent,
  Grid,
  Chip,
  Alert,
  Button
} from '@mui/material';
import { 
  Dna, 
  Scale, 
  Activity, 
  Baby, 
  ListChecks, 
  AlertTriangle, 
  AlertCircle, 
  CheckCircle2,
  RefreshCcw,
  Loader,
  ArrowLeft
} from 'lucide-react';

// Create axios instance with default config
const api = axios.create({
  headers: {
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': '0',
  }
});

const LoadingScreen = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
    }}
  >
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ position: 'relative', width: 80, height: 80 }}>
        <CircularProgress size={80} />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Dna size={40} className="text-primary" />
        </Box>
      </Box>
    </motion.div>
    <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
      Analyzing Compatibility Data
    </Typography>
    <Box sx={{ width: '100%', maxWidth: 400 }}>
      {['Genetic Analysis', 'Physical Assessment', 'Health Evaluation'].map((step, index) => (
        <motion.div
          key={step}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.2 }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', my: 1 }}>
            <Loader className="animate-spin mr-2" size={16} />
            <Typography variant="body2" color="text.secondary">
              {step}
            </Typography>
          </Box>
        </motion.div>
      ))}
    </Box>
  </Box>
);

const ResultSection = ({ icon: Icon, title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Card sx={{ mb: 2, backgroundColor: 'background.paper' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Icon size={24} className="text-[#4CAF50]" />
          <Typography variant="h6" sx={{ ml: 1 }}>{title}</Typography>
        </Box>
        {children}
      </CardContent>
    </Card>
  </motion.div>
);

const ErrorScreen = ({ error, onRetry }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      p: 3,
    }}
  >
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AlertTriangle size={64} className="text-red-500 mb-4" />
      <Typography variant="h5" gutterBottom align="center">
        Unable to Load Compatibility Data
      </Typography>
      <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 4 }}>
        {error}
      </Typography>
      <Button
        variant="contained"
        startIcon={<RefreshCcw size={16} />}
        onClick={onRetry}
        sx={{ mt: 2, bgcolor: '#4CAF50', '&:hover': { bgcolor: '#45a049' } }}
      >
        Try Again
      </Button>
    </motion.div>
  </Box>
);

const CompatibilityDetails = () => {
  const { cowId, bullId } = useParams();
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCompatibility = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Add timestamp to URL to prevent caching
      const timestamp = new Date().getTime();
      const response = await api.get(
        `http://localhost:4200/api/owners/${cowId}/${bullId}/compat?_t=${timestamp}`,
        {
          validateStatus: function (status) {
            return status >= 200 && status < 300;
          }
        }
      );
console.log(response);
      // Add artificial delay for better UX
      await new Promise(resolve => setTimeout(resolve, 1500));

      if (response.data?.compatibility) {
        setResult(response.data.compatibility);
      } else {
        throw new Error('Invalid response format from server');
      }
    } catch (error) {
      console.error('API Error:', error);
      setError(
        error.response?.data?.message || 
        error.message || 
        'Failed to fetch compatibility data'
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompatibility();
  }, [cowId, bullId]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Dashboard
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {loading ? (
          <LoadingScreen />
        ) : error ? (
          <ErrorScreen error={error} onRetry={fetchCompatibility} />
        ) : !result ? (
          <Container maxWidth="sm" sx={{ py: 4 }}>
            <Alert severity="warning">
              No compatibility data available. Please try again later.
            </Alert>
          </Container>
        ) : (
          <Container maxWidth="lg" sx={{ py: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h4" gutterBottom>Compatibility Results</Typography>
            </motion.div>

            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
              <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress
                  variant="determinate"
                  value={result.compatibilityScore}
                  size={120}
                  thickness={4}
                  sx={{ color: '#4CAF50' }}
                />
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="h4" component="div" sx={{ color: '#4CAF50' }}>
                    {result.compatibilityScore}%
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <ResultSection icon={Dna} title="Genetic Compatibility">
                  <Typography variant="body1" gutterBottom>{result.geneticCompatibility?.analysis}</Typography>
                  <Box sx={{ mt: 2 }}>
                    {result.geneticCompatibility?.riskFactors?.map((factor, index) => (
                      <Chip
                        key={index}
                        label={factor}
                        color="warning"
                        sx={{ m: 0.5 }}
                        icon={<AlertCircle size={16} />}
                      />
                    ))}
                  </Box>
                </ResultSection>

                <ResultSection icon={Scale} title="Physical Compatibility">
                  <Typography variant="body1" gutterBottom>{result.physicalCompatibility?.analysis}</Typography>
                  <Box sx={{ mt: 2 }}>
                    {result.physicalCompatibility?.considerations?.map((consideration, index) => (
                      <Chip
                        key={index}
                        label={consideration}
                        color="info"
                        sx={{ m: 0.5 }}
                        icon={<CheckCircle2 size={16} />}
                      />
                    ))}
                  </Box>
                </ResultSection>

                <ResultSection icon={Activity} title="Health Assessment">
                  <Typography variant="subtitle1" gutterBottom>Recommendations:</Typography>
                  <ul className="list-disc pl-6 space-y-2">
                    {result.healthAssessment?.recommendations?.map((rec, index) => (
                      <li key={index}>{rec}</li>
                    ))}
                  </ul>
                  <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>Risks:</Typography>
                  <ul className="list-disc pl-6 space-y-2">
                    {result.healthAssessment?.risks?.map((risk, index) => (
                      <li key={index}>{risk}</li>
                    ))}
                  </ul>
                </ResultSection>
              </Grid>

              <Grid item xs={12} md={6}>
                <ResultSection icon={Baby} title="Expected Offspring">
                  <Typography variant="subtitle1" gutterBottom>Potential Traits:</Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {result.expectedOffspring?.traits?.map((trait, index) => (
                      <Chip key={index} label={trait} sx={{ bgcolor: '#4CAF50', color: 'white' }} />
                    ))}
                  </Box>
                  <Typography variant="body1" gutterBottom>
                    <strong>Milk Production Potential:</strong> {result.expectedOffspring?.milkProductionPotential}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Growth Potential:</strong> {result.expectedOffspring?.growthPotential}
                  </Typography>
                </ResultSection>

                <ResultSection icon={ListChecks} title="Breeding Recommendations">
                  <ul className="list-disc pl-6 space-y-2">
                    {result.breedingRecommendations?.map((rec, index) => (
                      <li key={index}>{rec}</li>
                    ))}
                  </ul>
                </ResultSection>

                <ResultSection icon={AlertTriangle} title="Risk Factors to Monitor">
                  <ul className="list-disc pl-6 space-y-2">
                    {result.riskFactors?.map((risk, index) => (
                      <li key={index}>{risk}</li>
                    ))}
                  </ul>
                </ResultSection>
              </Grid>
            </Grid>
          </Container>
        )}
      </main>
    </div>
  );
};

export default CompatibilityDetails;