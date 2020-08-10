# Review Recommendation
This repository contains review recommendations using Collaborative Filtering approach.
## Dataset Used
- [Amazon Luxury Beauty Dataset](http://deepyeti.ucsd.edu/jianmo/amazon/categoryFilesSmall/Luxury_Beauty_5.json.gz)
- [Amazon Pantry Dataset](http://deepyeti.ucsd.edu/jianmo/amazon/categoryFilesSmall/Prime_Pantry_5.json.gz)

## Models Used
- NCF Recommenders Model
  NCF is a new neural matrix factorization model, which ensembles Generalized Matrix Factorization (GMF) and Multi-Layer Perceptron (MLP) to unify the strengths of   the linearity of MF and non-linearity of MLP for modeling the user-item latent structures. 
- Keras RecommenderNet
  The Keras model computes a match score between user and item embeddings via a dot product and adds a bias for every user and every item. The match score is scaled   to the [0, 1] interval via a sigmoid.

## Web UI using React and Algolia
#### Items rated by the user
![Screen Shot 2020-08-10 at 11 13 55 AM](https://user-images.githubusercontent.com/55044852/89823592-9a1b7980-db06-11ea-9721-0bac08b723ac.png)
#### Items recommended for the user
![image](https://user-images.githubusercontent.com/55044852/89823819-fb434d00-db06-11ea-9e89-5baaa22af0a2.png)

## References
- https://keras.io/examples/structured_data/collaborative_filtering_movielens/
- https://github.com/microsoft/recommenders
