const knex = require('../connection');

const addMovie = async (req, res) => {
    const { title, release_year, directed_by, synopsis } = req.body;

    try {
        const duplicateMovie = await knex('movies')
        .where({ title: knex.raw('LOWER(?)', title.trim()) })
        .where({ release_year })
        .where({ directed_by: knex.raw('LOWER(?)', directed_by.trim()) })
        .first();

        if (duplicateMovie) {
            return res.status(400).json({ message: 'Movie already exists' });
        };

        const newMovie = await knex('movies')
        .insert({ 
            title, 
            release_year, 
            directed_by, 
            synopsis: synopsis || 'N/A'
        }).returning('*');

        return res.status(201).json(newMovie[0]);
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    };
};

const findMovie = async (req, res) => {
    const { id } = req.params;

    try {
        const movieFound = await knex('movies')
        .where({ id }).first();

        if (!movieFound) {
            return res.status(400).json({ message: 'Movie not found' });
        };

        const { synopsis, ...movie } = movieFound;

        return res.status(200).json({ movie, synopsis });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    };
};

const editMovie = async (req, res) => {
    const { id } = req.params;
    const { title, release_year, directed_by, synopsis } = req.body;

    try {
        const duplicateMovie = await knex('movies')
        .where({ title: knex.raw('LOWER(?)', title.trim()) })
        .where({ release_year })
        .where({ directed_by: knex.raw('LOWER(?)', directed_by.trim()) })
        .whereNot({ id }).first();

        if (duplicateMovie) {
            return res.status(400).json({ message: 'Movie already exists' });
        };

        await knex('movies')
        .update({
            title, 
            release_year, 
            directed_by, 
            synopsis: synopsis || 'N/A'
        }).where({ id }).returning('*');

        return res.status(204).send();
    } catch (error) {
       return res.status(500).json({ message: 'Internal server error' }); 
    };
};

const deleteMovie = async (req, res) => {
    const { id } = req.params;

    try {
        const movieFound = await knex('movies')
        .where({ id }).first();

        if (!movieFound) {
            return res.status(400).json({ message: 'Movie not found' });
        };

        await knex('movies')
        .where({ id })
        .del();

        return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });  
    };
};

const listMovies = async (req, res) => {
    try {
        const movies = await knex('movies')
        .select('*')
        .orderBy('id', 'desc');

        return res.status(200).json(movies);
    } catch (error) {
       return res.status(500).json({ message: 'Internal server error' }); 
    }
};

module.exports = {
    addMovie,
    findMovie,
    editMovie,
    deleteMovie,
    listMovies
};