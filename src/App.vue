<template>
    <div id="app">


        <Header>

            <h1 style="color: white; background:none">My Music App</h1>

        </Header>

        <main>
            <section class="player">
                <h2 class="song-title">{{current.title}} :
                    <span>{{current.artist}}</span>

                </h2>
                <div class="control">

                    <button @click="prev" class="prev">Prev</button>
                    <button v-if="! isPlaying" @click="play" class="play">Play</button>
                    <button v-else @click="pause" class="pause">Pause</button>
                    <button @click="next" class="next">Next</button>

                </div>

            </section>

            <section class="playList">
                <h3 style="color: Indigo">PlayList :</h3>
                <button v-for="song in songs" v-bind:key="song.src" @click="play(song)"
                        :class="(song.src==current.src) ? 'songPlaying' :'song'">
                    <!--          :class="(song.src==current.src) ? 'songPlaying' :'song'"-->
                    {{song.title}}
                </button>

            </section>

        </main>


    </div>
</template>

<script>


    export default {
        name: 'App',


        data() {
            return {
                current: {},
                isPlaying: false,
                index: 1,
                songs: [{
                    title: 'Castle On Hill',
                    artist: 'Ed sheeren',
                    src: require('./assets/castel.mp3')
                },
                    {
                        title: 'Shape Of You',
                        artist: 'Ed sheeren',
                        src: require('./assets/shape.mp3')
                    }

                ],
                player: new Audio()

            }
        },
        created() {
            this.current = this.songs[this.index];
            this.player.src = this.current.src;

        },
        methods: {
            play(song) {
                if (typeof song.src != "undefined") {
                    this.current = song;
                    this.player.src = this.current.src;
                }

                this.player.play();
                this.player.addEventListener('ended', function () {
                    this.index++;
                    if (this.index > this.songs.length - 1) {
                        this.index = 0;
                    }
                    this.current = this.songs[this.index];
                    this.play(this.current);

                }.bind(this))
                this.isPlaying = true;

            },
            pause() {
                this.player.pause();

                this.isPlaying = false;
            },
            prev() {
                this.index--;
                if (this.index < 0) {
                    this.index = this.songs.length - 1;
                }
                this.current = this.songs[this.index];
                this.play(this.current);
            },
            next() {
                this.index++;
                if (this.index > this.songs.length - 1) {
                    this.index = 0;
                }
                this.current = this.songs[this.index];
                this.play(this.current);
            }
        }


    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: Lavender;
    }

    body {
        font-family: "Comic Sans MS";
    }

    header {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px;
        background: rgb(70, 24, 151);
        background: radial-gradient(circle, rgba(70, 24, 151, 1) 60%, rgba(148, 233, 233, 1) 96%);
        color: #ffffff;
    }

    main {
        width: 100%;
        max-width: 768px;
        margin: 0 auto;
        padding: 25px;

    }

    .song-title {
        color: DarkRed;
        font-size: 32px;
        font-family: "Comic Sans MS";
        font-weight: 700;
        text-align: center;
    }

    .song-title span {
        font-weight: 700;

    }

    .control {
        display: flex;
        justify-content: center;
        padding: 30px 15px;

    }

    button {
        appearance: none;
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
        transition: 0.3s;
    }

    button:hover {
        background-color: Wheat;
    }

    .play {
        font-size: 20px;
        font-weight: 700;
        padding: 15px 25px;
        margin: 0 15px;
        border-radius: 8px;
        background-color: bisque;
        font-family: "Comic Sans MS";


    }

    .pause {
        font-size: 20px;
        font-weight: 700;
        padding: 15px 25px;
        margin: 0 15px;
        border-radius: 8px;
        background-color: bisque;
        font-family: "Comic Sans MS";
    }

    .prev {
        font-size: 20px;
        font-weight: 700;
        padding: 10px 20px;
        margin: 0 15px;
        border-radius: 6px;
        background-color: bisque;
        font-family: "Comic Sans MS";
    }

    .next {
        font-size: 20px;
        font-weight: 700;
        padding: 10px 20px;
        margin: 0 15px;
        border-radius: 6px;
        background-color: bisque;
        font-family: "Comic Sans MS";
    }


    .playList {
        padding: 0px 30px;
        margin-top: 30px;


    }

    .playList h3 {
        font-size: 28px;
        font-weight: 700;
        margin-bottom: 30px;
        text-align: center;
    }

    .song {
        display: block;
        /*width: 100%;*/
        padding: 15px;
        font-size: 20px;
        font-weight: 700;
        cursor: pointer;
        font-family: "Comic Sans MS";
        margin: auto;
        transition: 0.3s;
        color: Navy;

    }

    .song:hover {
        background-color: PaleTurquoise;
    }

    .songPlaying {
        display: block;
        /*width: 100%;*/
        padding: 15px;
        font-size: 20px;
        font-weight: 700;
        cursor: pointer;
        font-family: "Comic Sans MS";
        margin: auto;
        transition: 0.3s;
        color: Navy;

    }

    .songPlaying:hover {
        background-color: PaleTurquoise;
    }


</style>
