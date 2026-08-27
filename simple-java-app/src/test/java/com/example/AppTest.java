package com.example;

import static org.junit.Assert.assertEquals;
import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class AppTest 
{
    @Test
    public void testApp()
    {
        App app = new App();
        assertEquals("Bisnu's jenkins 1st successfully build and deployment", app.getMessage());
    }
}
