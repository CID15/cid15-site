const AWS = require( 'aws-sdk' );
const s3 = require( 's3-node-client' );
const path = require( 'path' );

const deploy = function( options ) {

    const awsS3 = new AWS.S3();

    const s3Client = s3.createClient( {
        s3Client: awsS3
    } );

    return new Promise( ( resolve, reject ) => {

        const uploader = s3Client.uploadDir( {
            localDir: options.localDir,
            deleteRemoved: true,
            s3Params: {
                Bucket: options.bucket,
                ACL: "public-read"
            }
        } );

        uploader.on( 'error', function( err ) {
            reject( err );
        } );
        uploader.on( 'progress', function() {
            console.log("progress", uploader.progressAmount, uploader.progressTotal);
        } );
        uploader.on( 'end', function() {
            resolve();
        } );

    } );

};


deploy( {
    localDir: path.join( __dirname, "./public" ),
    bucket: "www.cid15.org"
} )
    .then( () => {
        console.log( 'Done' );
    } )
    .catch( e => {
        console.log( 'Error', e.stack );
    } );


//console.log( process.env.AWS_ACCESS_KEY_ID );