/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */ 
package spaceinvaders;
 
import java.io.*;
import java.awt.*;
import java.awt.geom.*;
import java.awt.event.*;
import javax.swing.*;

public class SpaceInvaders extends JFrame implements Runnable {
    static final int XBORDER = 20;
    static final int YBORDER = 70;
    static final int YTITLE = 30;
    static final int WINDOW_BORDER = 8;
    static final int WINDOW_WIDTH = 2*(WINDOW_BORDER + XBORDER) + 500;
    static final int WINDOW_HEIGHT = YTITLE + WINDOW_BORDER + 2 * YBORDER + 500;
    
    boolean animateFirstTime = true;
    int xsize = -1;
    int ysize = -1;
    Image image;
    Graphics2D g;

    int cannonXPos;
    int cannonYPos;
    
    int currentCannonBallIndex;
    int numCannonBalls = 100;
    int cannonBallXPos[]=new int[numCannonBalls];
    int cannonBallYPos[]=new int[numCannonBalls];
    boolean cannonBallVisible[]=new boolean[numCannonBalls];
    
    
    int numAliens = 100;
    int alienXPos[] = new int[numAliens];
    int alienYPos[] = new int[numAliens];
    boolean alienVisible[] = new boolean[numAliens];
    int alienScoreVal[] = new int[numAliens];
    
    
    int alienExplodeTime[] = new int[numAliens];
    int alienExplodeXPos[] = new int[numAliens];
    int alienExplodeYPos[] = new int[numAliens];
    boolean alienExplodeVisible[] = new boolean[numAliens];
    
    int alienXDir;

    int score;
    int highscore;

    
    boolean gameOver;

    static SpaceInvaders frame;
    public static void main(String[] args) {
        frame = new SpaceInvaders();
        frame.setSize(WINDOW_WIDTH, WINDOW_HEIGHT);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }

    public SpaceInvaders() {
        addMouseListener(new MouseAdapter() {
            public void mousePressed(MouseEvent e) {
                if (e.BUTTON1 == e.getButton()) {
                    //left button
// location of the cursor.
                    if (gameOver)
                        return;
                    
                    int xpos = e.getX();
                    int ypos = e.getY();
                    cannonBallVisible[currentCannonBallIndex] = true;
                    cannonBallXPos[currentCannonBallIndex] = cannonXPos;
                    cannonBallYPos[currentCannonBallIndex] = cannonYPos;
                    currentCannonBallIndex++;
                    if (currentCannonBallIndex >= numCannonBalls)
                        currentCannonBallIndex = 0;

                }
                if (e.BUTTON3 == e.getButton()) {
                    //right button
                    reset();
                 }
                repaint();
            }
        });

    addMouseMotionListener(new MouseMotionAdapter() {
      public void mouseDragged(MouseEvent e) {
        repaint();
      }
    });

    addMouseMotionListener(new MouseMotionAdapter() {
      public void mouseMoved(MouseEvent e) {

          cannonXPos = e.getX() - getX(0);

        repaint();
      }
    });

        addKeyListener(new KeyAdapter() {

            public void keyPressed(KeyEvent e) {
                if (e.VK_UP == e.getKeyCode()) {
                        cannonBallVisible[currentCannonBallIndex] = true;
                    cannonBallXPos[currentCannonBallIndex] = cannonXPos;
                    cannonBallYPos[currentCannonBallIndex] = cannonYPos;
                    currentCannonBallIndex++;
                    if (currentCannonBallIndex >= numCannonBalls)
                        currentCannonBallIndex = 0;
                   
                } else if (e.VK_DOWN == e.getKeyCode()) {
                } else if (e.VK_LEFT == e.getKeyCode()) {
                } else if (e.VK_RIGHT == e.getKeyCode()) {
                }
                repaint();
            }
        });
        init();
        start();
    }
    Thread relaxer;
////////////////////////////////////////////////////////////////////////////
    public void init() {
        requestFocus();
    }
////////////////////////////////////////////////////////////////////////////
    public void destroy() {
    }



////////////////////////////////////////////////////////////////////////////
    public void paint(Graphics gOld) {
        if (image == null || xsize != getSize().width || ysize != getSize().height) {
            xsize = getSize().width;
            ysize = getSize().height;
            image = createImage(xsize, ysize);
            g = (Graphics2D) image.getGraphics();
            g.setRenderingHint(RenderingHints.KEY_ANTIALIASING,
                    RenderingHints.VALUE_ANTIALIAS_ON);
        } 
//fill background
        g.setColor(Color.cyan);
        g.fillRect(0, 0, xsize, ysize);

        int x[] = {getX(0), getX(getWidth2()), getX(getWidth2()), getX(0), getX(0)};
        int y[] = {getY(0), getY(0), getY(getHeight2()), getY(getHeight2()), getY(0)};
//fill border
        g.setColor(Color.white);
        g.fillPolygon(x, y, 4);
// draw border
        g.setColor(Color.red);
        g.drawPolyline(x, y, 5);


        
        if (animateFirstTime) {
            gOld.drawImage(image, 0, 0, null);
            return;
        }
        
        g.setColor(Color.red);
        drawCannon(getX(cannonXPos),getYNormal(cannonYPos),0,1,1);
        
        for (int index=0;index<numCannonBalls;index++)
        {
            if (cannonBallVisible[index])
            {
                g.setColor(Color.black);
                drawCircle(getX(cannonBallXPos[index]),getYNormal(cannonBallYPos[index]),0,1,1);
            }
        }
        for (int index=0;index<numAliens;index++)
        {
            if (alienVisible[index])
            {
                g.setColor(Color.green);
                drawAlien(getX(alienXPos[index]),getYNormal(alienYPos[index]),0,1,1, alienScoreVal[index]);
            }
        }

        for (int index=0;index<numAliens;index++)
        {
            if (alienExplodeVisible[index])
            {
                g.setColor(Color.yellow);
                drawCircle(getX(alienExplodeXPos[index]),getYNormal(alienExplodeYPos[index]),0,alienExplodeTime[index]* .2,alienExplodeTime[index]* .2);
            }
        }         
        g.setColor(Color.black);
        g.setFont(new Font("Impact",Font.BOLD,15));
        g.drawString("Score: " + score, 10, 50);
        g.drawString("Highscore: " + highscore, 10, 65);
       
        if (gameOver)
        {
            g.setColor(Color.black);
            g.setFont(new Font("Impact",Font.BOLD,60));
            g.drawString("GAME OVER", 140, 350);

        }
        gOld.drawImage(image, 0, 0, null);
    }
////////////////////////////////////////////////////////////////////////////

    public void drawAlien(int xpos,int ypos,double rot,
    double xscale,double yscale, int scoreVal)
    {
        g.translate(xpos,ypos);
        g.rotate(rot  * Math.PI/180.0);
        g.scale( xscale , yscale );
       
        int xval[] = {10,-10,-10,-5,-10,0,10,5,10};
        int yval[] = {-20,-20,-5,-5,10,0,10,-5,-5};
        g.fillPolygon(xval,yval,xval.length);
        g.setColor(Color.black);
        g.setFont(new Font("Impact",Font.BOLD,15));
        g.drawString("" + scoreVal , 0, 0);
       
        g.scale( 1.0/xscale,1.0/yscale );
        g.rotate(-rot  * Math.PI/180.0);
        g.translate(-xpos,-ypos);
    }      
////////////////////////////////////////////////////////////////////////////
    public void drawCannon(int xpos,int ypos,double rot,double xscale,double yscale)
    {
        g.translate(xpos,ypos);
        g.rotate(rot  * Math.PI/180.0);
        g.scale( xscale , yscale );

        int xval[] = {  0, 10, 10,-10,-10,  0};
        int yval[] = {-15,-10, 10, 10,-10,-15};
        g.fillPolygon(xval,yval,xval.length);
        
        g.scale( 1.0/xscale,1.0/yscale );
        g.rotate(-rot  * Math.PI/180.0);
        g.translate(-xpos,-ypos);
    }
           
////////////////////////////////////////////////////////////////////////////
    public void drawCircle(int xpos,int ypos,double rot,double xscale,double yscale)
    {
        g.translate(xpos,ypos);
        g.rotate(rot  * Math.PI/180.0);
        g.scale( xscale , yscale );

        g.fillOval(-10,-10,20,20);
     
        g.scale( 1.0/xscale,1.0/yscale );
        g.rotate(-rot  * Math.PI/180.0);
        g.translate(-xpos,-ypos);
    }
      

////////////////////////////////////////////////////////////////////////////
// needed for     implement runnable
    public void run() {
        while (true) {
            animate();
            repaint();
            double seconds = 0.04;    //time that 1 frame takes.
            int miliseconds = (int) (1000.0 * seconds);
            try {
                Thread.sleep(miliseconds);
            } catch (InterruptedException e) {
            }
        }
    }
/////////////////////////////////////////////////////////////////////////
    public void reset() {
        cannonYPos = 0;

        
        currentCannonBallIndex = 0;
        for (int index=0;index<numCannonBalls;index++)
        {
            cannonBallVisible[index] = false;
            cannonBallXPos[index] =  cannonXPos;
            cannonBallYPos[index] =  cannonYPos;
        }
        for (int index=0;index<numAliens;index++)
        {
            alienScoreVal[index] = (int)(Math.random() *4 + 1);
            alienVisible[index] = true;
            alienExplodeVisible[index] = false;
            alienXPos[index] = (int)(Math.random() * getWidth2());
            alienYPos[index] = (int)(Math.random() * getHeight2()/2 + getHeight2()/2);        
        }
        alienXDir = 1;
        score = 0;    
        gameOver = false;
    }
/////////////////////////////////////////////////////////////////////////
    public void animate() {
        if (animateFirstTime) {
            animateFirstTime = false;
            if (xsize != getSize().width || ysize != getSize().height) {
                xsize = getSize().width;
                ysize = getSize().height;
            }
         
            reset();
            cannonXPos = getWidth2()/2;
     
        }

        if (gameOver)
            return;
        
        for (int count=0;count<numCannonBalls;count++)
        {
            if (cannonBallVisible[count])
            {
                cannonBallYPos[count] += 8;
                if (cannonBallYPos[count] >= getHeight2())
                    cannonBallVisible[count] = false;
            }                  
        }        
        
        for (int count=0;count<numCannonBalls;count++)
        {
            for (int index=0;index<numAliens;index++)
            {
                if (alienVisible[index] && cannonBallVisible[count])
                {
                    if (alienXPos[index]-20 < cannonBallXPos[count] && 
                        alienXPos[index]+20 > cannonBallXPos[count] &&
                        alienYPos[index]-20 < cannonBallYPos[count] &&
                        alienYPos[index]+20 > cannonBallYPos[count])
                    {
                       // alienVisible[index] = false;
                        alienExplodeVisible[index] = true;
                        alienExplodeXPos[index] = cannonBallXPos[count];
                        alienExplodeYPos[index] = cannonBallYPos[count];
                        score+= alienScoreVal[index];
                        alienExplodeTime[index] = 1;
                        alienXPos[index] = (int)(Math.random() * getWidth2());                    
                        alienYPos[index] = getHeight2();        
                        
                    }

                }
            }
        }        
       
        for (int index=0;index<numAliens;index++)
        {
            if (alienVisible[index])
            {
                alienYPos[index]--;
                if (alienYPos[index] <= 0)
                    gameOver = true;
            }
        }    
        for (int index=0;index<numAliens;index++)
        {
           if (alienVisible[index])
           {
               alienXPos[index] += alienXDir;
            if (alienXPos[index] > getWidth2())
                alienXDir = -1;
            if (alienXPos[index] < 0)
                alienXDir = 1;
           }     
            
        }

      for (int index=0;index<numAliens;index++)
        {   
            if(alienExplodeVisible[index])   
            { 
              alienExplodeTime[index]++; 
            }
            if(alienExplodeTime[index] > 25)
            {
                alienExplodeVisible[index] = false;
            }
        
        }
                
       if(highscore < score)         
          highscore = score;         
      
               
                
                
       }

////////////////////////////////////////////////////////////////////////////
    public void start() {
        if (relaxer == null) {
            relaxer = new Thread(this);
            relaxer.start();
        }
    }
////////////////////////////////////////////////////////////////////////////
    public void stop() {
        if (relaxer.isAlive()) {
            relaxer.stop();
        }
        relaxer = null;
    }
/////////////////////////////////////////////////////////////////////////
    public int getX(int x) {
        return (x + XBORDER + WINDOW_BORDER);
    }
    public int getY(int y) {
        return (y + YBORDER + YTITLE );
    }
    public int getYNormal(int y) {
        return (-y + YBORDER + YTITLE + getHeight2());
    }
    public int getWidth2() {
        return (xsize - 2 * (XBORDER + WINDOW_BORDER));
    }
    public int getHeight2() {
        return (ysize - 2 * YBORDER - WINDOW_BORDER - YTITLE);
    }
}
